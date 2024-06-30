import { useState } from "react";
import { useSelector } from "react-redux";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import PropTypes from "prop-types";

import { db } from "../firebase";

const SendMessage = ({ scroll }) => {
  const userDetails = useSelector((state) => state.userDetails);
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }

    await addDoc(collection(db, "messages"), {
      text: message,
      name: userDetails.username,
      avatar: "",
      createdAt: serverTimestamp(),
      uid: userDetails.username,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

SendMessage.propTypes = {
  scroll: PropTypes.object.isRequired,
};

export default SendMessage;
