import React from "react";

import './Message.scss';

const Message = ({ text, type }) => {
  switch (type) {
    case 'error':
      return (
        <div className="error">{text}</div>
      )

    case 'success':
      return (
        <div className="success">{text}</div>
      )

    default:
      return <div>{text}</div>
  }
};

export default Message;