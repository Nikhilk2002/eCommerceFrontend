import React, { useEffect, useState } from "react";
import "./UserList.css";
import { userList, removeUser } from "../../../Services/AdminApi";

function UserList() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  const fetchData = async () => {
    try {
      const { data } = await userList();
      if (data.status) {
        setUsers(data.UserList);
        setTotalUsers(data.UserList.length);
      } else {
        console.log("Error fetching user list");
      }
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  const handleRemoveUser = async (userId) => {
    try {
      const { data } = await removeUser(userId);
      if (data.status) {
        fetchData(); // Refresh the user list after removing user
      } else {
        console.log("Error removing user");
      }
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="adminHome">
        <h1>User List</h1>
        <h3>Total Users: {totalUsers}</h3>
        <div className="userListTable">
          <table className="userListTable">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveUser(user._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserList;
