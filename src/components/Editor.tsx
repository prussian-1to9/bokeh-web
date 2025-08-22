import React from "react";

const Editor: React.FC<{ editor: string }> = ({ editor }) => {
  return (
    <span className=" border-l-4 border-slate-800 pl-2 text-lg font-semibold">
      Editor {editor}
    </span>
  );
};

export default Editor;
