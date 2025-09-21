import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

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
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
export default UsersPage;
