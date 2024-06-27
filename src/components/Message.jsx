import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "../App";

const Message = ({ message }) => {
  const userDetailsMemo = useContext(UserContext);
  const { userDetails } = userDetailsMemo;
  return (
    <div
      className={`chat-bubble ${
        message.uid === userDetails.uid ? "right" : ""
      }`}
    >
      {/* <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      /> */}
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
