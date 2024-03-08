import React from 'react';
import './UserList.css';


function UserList() {
  return (
    <>
      <div className='adminHome'>
        <h1>User List</h1>
        <table className='userListTable'>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Remove</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nikhil</td>
              <td>nikhil1234@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>

            </tr>
            <tr>
              <td>2</td>
              <td>Afsal</td>
              <td>afsaltirur@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Saneesh</td>
              <td>Saneeshvalanchery@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Sreejith</td>
              <td>sreejithtech@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Nikhitha</td>
              <td>nikhithatechy@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>vaishnima</td>
              <td>vaishnimatechy@gmail.com</td>
              <td><button className='block-btn'>Block</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserList