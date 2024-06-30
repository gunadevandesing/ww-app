import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ChatBox from "./components/ChatBox.jsx";
import Welcome from "./components/Welcome.jsx";

import { useSelector } from "react-redux";

const App = () => {
  const userDetails = useSelector((state) => state.userDetails);

  return (
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
  );
};

export default App;
