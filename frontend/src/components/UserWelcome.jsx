import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";

export default function UserWelcome({ userInfo }) {
  const [usersName, setUsersName] = useState("");
  console.log(userInfo);
  const userId = userInfo;

  {
    useEffect(() => {
      async function getFirstName() {
        const [user, error] = await getUser(userId);
        console.log(user);
        const userFirstName = user.first_name;
        setUsersName(userFirstName);
      }
      getFirstName();
    }, [setUsersName]);
  }

  console.log(usersName);
  return <h1>Welcome, {usersName}!</h1>;
}
