import React from "react";

const UsersPage: React.FC = () => {
  const users = ["Alice", "Bob", "Charlie"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="list-disc pl-6 space-y-2">
        {users.map((user, idx) => (
          <li key={idx} className="text-gray-700">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
