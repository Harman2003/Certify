import React, { useState } from "react";

function FlashCard({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`border p-4 rounded-lg cursor-pointer ${
        expanded ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
      onClick={toggleExpansion}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {expanded && <p>{content}</p>}
    </div>
  );
}

export default FlashCard;