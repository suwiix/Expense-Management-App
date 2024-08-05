import React from "react";

const Footer = () => {
  const date=new Date()
  const footerStyle = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    padding: '10px',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'
  };
  return (
    <div className=" bg-dark text-light p-4" style={footerStyle}>
      <h6 className="text-center text-white">
        All rights reserved &copy; Suwin⚡{date.getFullYear()}
      </h6>
    </div>
  );
};

export default Footer;
