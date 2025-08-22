import React from "react";
import Hashtag from "@components/Hashtag";

const HashtagContainer: React.FC<{ hashtags: string[] }> = ({ hashtags }) => {
  return (
    <div className="flex flex-wrap gap-2 my-2">
      {hashtags.map((tag) => (
        <Hashtag key={tag} text={tag} />
      ))}
    </div>
  );
};

export default HashtagContainer;
