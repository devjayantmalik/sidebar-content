import React from "react";

export default function Content({ currentElement, setCurrentElement }) {
  return currentElement ? (
    <div className="content">
      <h1>{currentElement}</h1>
      <button onClick={() => setCurrentElement(null)}>Go back</button>
    </div>
  ) : null;
}
