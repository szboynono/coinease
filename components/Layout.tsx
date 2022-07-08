import React, { useContext } from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto py-5">{children}</div>
    </>
  );
};

export default Layout;
