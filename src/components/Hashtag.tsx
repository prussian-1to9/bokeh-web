import React from "react";

const Hashtag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="text-slate-800 hover:bg-slate-500 cursor-pointer bg-slate-400 px-2 rounded-xl">
      #{text}
    </span>
  );
};

export default Hashtag;
