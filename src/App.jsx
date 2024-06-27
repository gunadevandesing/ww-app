import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { createContext, useMemo, useState } from "react";

export const UserContext = createContext(null);
const initialUserState = {
  username: "",
  uid: "",
};

function App() {
  const [userDetails, setUserDetails] = useState(initialUserState);

  const userDetailsMemo = useMemo(() => {
    return {
      userDetails,
      setUserDetails,
    };
  }, [userDetails]);

  return (
    <UserContext.Provider value={userDetailsMemo}>
      <div className="App">
        <NavBar />
        {!userDetails.username ? (
          <Welcome />
        ) : (
          <>
            <ChatBox />
          </>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
