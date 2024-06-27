import { db } from "../firebase";
import { collection, deleteDoc } from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "../App";

const NavBar = () => {
  const userDetailsMemo = useContext(UserContext);
  const { userDetails } = userDetailsMemo;

  const deleteCollection = async () => {
    await deleteDoc(collection(db, "messages"));
  };

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {/* <button
        onClick={deleteCollection}
        className="delete-collection"
        type="button"
      >
        Delete Collection
      </button> */}
    </nav>
  );
};

export default NavBar;
