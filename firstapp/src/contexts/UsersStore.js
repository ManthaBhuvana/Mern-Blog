import { useState, useEffect } from "react";
import { UsersContext } from "./UsersContext";

function UsersStore({ children }) {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((httpRes) => httpRes.json())
      .then((usersList) => setUsers(usersList));
  }, []);

  return <UsersContext.Provider value={users}>{children}</UsersContext.Provider>;
}

export default UsersStore;
