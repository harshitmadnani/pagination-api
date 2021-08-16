import { useEffect, useState } from "react";
import "./post.css"
const Posts = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log(error));

  }, []);

  return (
    <div>
      <table className="table">
        <tr>
          <th> Id </th>
          <th> First Name </th>
          <th> Last Name </th>
          <th> Email </th>
          <th> Avatar </th>
        </tr>

        {
        userList && userList.length > 0
          ? userList.map(user => 
              <tr >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
               <td>{user.email}</td>
                
                
              </tr>
          ) : "Loading..."
          }
      </table>
    </div>
  );
};

export default Posts;
