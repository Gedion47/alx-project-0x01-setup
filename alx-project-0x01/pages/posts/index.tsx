import React from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  const samplePosts = [
    {
      title: "First Post",
      description: "This is the first post",
      author: "Alice",
    },
    { title: "Second Post", description: "Another post here", author: "Bob" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {samplePosts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

export default PostsPage;
