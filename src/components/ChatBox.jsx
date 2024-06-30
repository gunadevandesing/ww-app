import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";

import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { setMessages } from "../redux/slices/messageDetailsSlice";

const ChatBox = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messageDetails.messages);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages
        .sort((a, b) => a.createdAt - b.createdAt)
        ?.map((message) => ({
          ...message,
          createdAt: `${message.createdAt}`,
        }));
      dispatch(setMessages(sortedMessages));
    });

    return () => unsubscribe;
  }, [dispatch]);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;
