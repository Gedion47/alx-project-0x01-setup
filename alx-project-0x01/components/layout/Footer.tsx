import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-center p-4 mt-8 border-t">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} My App
      </p>
    </footer>
  );
};

export default Footer;
