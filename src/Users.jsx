import React, { useState } from "react";

const Users = ({store}) => {
  const [inputValue, setInputValue] = useState("");
  const addUser = () => {
    store.addUser(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <div>Total: {store.users.length}</div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <div>
        {store.users.map((user, index) => (
            <div key={index}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Users;
