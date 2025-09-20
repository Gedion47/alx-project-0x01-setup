import React from "react";

interface PostCardProps {
  title: string;
  description: string;
  author?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, description, author }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      {author && <span className="text-sm text-gray-500">By {author}</span>}
    </div>
  );
};

export default PostCard;
