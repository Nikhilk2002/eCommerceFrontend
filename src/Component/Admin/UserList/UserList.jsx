import React, { useEffect, useState } from "react";
import "./UserList.css";
import { userList } from "../../../Services/AdminApi";

function UserList() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  const fetchData = async () => {
    const {data} = await userList();
    if(data.status) {
      setUsers(data.UserList);
      setTotalUsers(data.UserList.length);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <div className="adminHome">
        <h1>User List</h1>
        <h3>
          Total Users: {totalUsers}
        </h3>
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
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.blockStatus ? (
                    <button
                      className="block-btn"
                      
                    >
                      Unblock
                    </button>
                  ) : (
                    <button
                      className="block-btn "
                   
                    >
                      Block
                    </button>
                  )}
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