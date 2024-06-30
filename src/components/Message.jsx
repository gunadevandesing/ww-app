import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const userDetails = useSelector((state) => state.userDetails);

  return (
    <div
      className={`chat-bubble ${
        message.uid === userDetails.username ? "right" : ""
      }`}
    >
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
