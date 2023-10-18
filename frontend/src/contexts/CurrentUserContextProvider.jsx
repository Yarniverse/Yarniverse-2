import { useState, useEffect } from "react";
import CurrentUserContext from "./current-user-context";
import { checkForLoggedInUser } from "../adapters/auth-adapter";

export default function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const context = { currentUser, setCurrentUser };

  useEffect(() => {
    const doFetch = async () => {
      const res = await checkForLoggedInUser();
      console.log(res);
      setCurrentUser(res);
      localStorage.setItem("currentUser_id", res.id);
    };
    doFetch();
  }, []);
  console.log(currentUser);
  return (
    <CurrentUserContext.Provider value={context}>
      {children}
    </CurrentUserContext.Provider>
  );
}
