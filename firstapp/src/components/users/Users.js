import "./Users.css";
import User from "../user/User";

function Users() {
  //state (Users array)
  let usersList = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
  ];

  return (
    <div>
      <h1>Users List</h1>
      {/* nest User for 3 times */}
      <div className="d-flex justify-content-between mt-5">
        <User userData={usersList[0]} />
        <User userData={usersList[1]} />
        <User userData={usersList[2]} />
      </div>
    </div>
  );
}

export default Users;
