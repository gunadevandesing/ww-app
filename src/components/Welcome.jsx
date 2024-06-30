import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "../redux/slices/userDetailsSlice";

const Welcome = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const userNameRef = useRef("");

  const handleSubmit = () => {
    dispatch(
      setUserDetails({
        username: userNameRef.current.value,
        uid: Math.random().toString(36).slice(2),
      })
    );
  };

  return (
    <main className="welcome">
      <h2>Provide Username.</h2>
      {userDetails.username}
      <input type="text" placeholder="Username" ref={userNameRef} required />
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
};

export default Welcome;
