// src/Components/UserList.js
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../GetAllUsers";
import "./UserList.css";

const UserList = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="user-list-container">
      <h2>All Users</h2>
      <ul className="user-list">
        {data?.users?.data?.map((user) => (
          <li key={user.id} className="user-list-item">
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
