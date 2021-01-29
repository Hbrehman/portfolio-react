import React from "react";

export default function StackItem({ imgLink, title }) {
  return (
    <>
      <div className="stack-item">
        <img src={imgLink} alt="javascript" />
        <span>{title}</span>
      </div>
    </>
  );
}
