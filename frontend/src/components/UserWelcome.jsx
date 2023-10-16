import { useState, useEffect } from "react";
import { getUser } from "../adapters/user-adapter";

export default function UserWelcome({ userInfo }) {
  const [usersName, setUsersName] = useState("");
  const userId = userInfo;

  {
    useEffect(() => {
      async function getFirstName() {
        const [user, error] = await getUser(userId);
        const userFirstName = user.first_name;
        setUsersName(userFirstName);
      }
      getFirstName();
    }, [setUsersName]);
  }

  return <h1>Welcome, {usersName}!</h1>;
}
