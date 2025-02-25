import React from "react";

const MessageModal = ({ text }) => {
  return (
    <div className="flex justify-center items-center my-4 bg-red-500 z-[100] fixed bottom-0 right-2 w-96 h-16 rounded-xl border-2 border-white">
      <p className="text-white">{text}</p>
    </div>
  );
};

export default MessageModal;
