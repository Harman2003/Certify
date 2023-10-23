import React, { useState } from "react";

function FlashCard({ title, content,titleh }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`transform transition-all hover:scale-105 shadow-xl border-l-sky-300 p-4 rounded-lg cursor-pointer mb-6 ${
        expanded ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-l-0" : "bg-white text-slate-600  border-l-8"
      }`}
      onClick={toggleExpansion}
    >
      <h2 className={`text-3xl mb-2 font-bold font-palanquin ${expanded ? "text-white": "text-sky-500"}`}>{title}
      <span className={`text-2xl mb-2 font-palanquin font-medium ${expanded ? "text-white": "text-black"}`}>{titleh}</span></h2>
      
      {expanded && <p className="font-montserrat">{content}</p>}
    </div>
  );
}

export default FlashCard;