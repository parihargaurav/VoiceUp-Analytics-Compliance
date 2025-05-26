// File: src/components/Message.jsx
import React from 'react';

const Message = ({ sender, text }) => (
  <div
    className={`max-w-md mb-4 p-4 rounded-xl shadow-sm ${
      sender === 'agent'
        ? 'bg-blue-100 text-blue-900 self-start ml-2'
        : 'bg-green-100 text-green-900 self-end mr-2'
    }`}
  >
    <p className="text-sm font-semibold capitalize mb-1">{sender}</p>
    <p className="text-sm">{text}</p>
  </div>
);

export default Message;
