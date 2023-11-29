import React from "react";
import { useLocation } from "react-router-dom";

function UserDashBoard() {
  let { state } = useLocation();

  return (
    <div>
      <div className="text-end">
        <p className="lead fs-3  text-info">
          Welcome ,<span className="text-danger fs-1">{state.username}</span>
        </p>
        <p className="lead">{state.email}</p>
      </div>
    </div>
  );
}

export default UserDashBoard;
