import { useContext, useRef } from "react";
import { UserContext } from "../App";

const Welcome = () => {
  const userDetailsMemo = useContext(UserContext);
  const { setUserDetails } = userDetailsMemo;
  const userNameRef = useRef("");

  const handleSubmit = () => {
    setUserDetails((prevState) => ({
      ...prevState,
      username: userNameRef.current.value,
      uid: Math.random().toString(36).slice(2),
    }));
  };

  return (
    <main className="welcome">
      <h2>Provide Username.</h2>
      <input type="text" placeholder="Username" ref={userNameRef} required />
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
};

export default Welcome;
