import React from "react";

export default function Sidebar({ setState }) {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>

      <ul className="sidebar-menu">
        <li onClick={() => setState("Sidebar Item 1 clicked!")}>
          Sidebar Item
        </li>
        <li onClick={() => setState("Sidebar Item 2 clicked!")}>
          Sidebar Item
        </li>
        <li onClick={() => setState("Sidebar Item 3 clicked!")}>
          Sidebar Item
        </li>
        <li onClick={() => setState("Sidebar Item 4 clicked!")}>
          Sidebar Item
        </li>
        <li onClick={() => setState("Sidebar Item 5 clicked!")}>
          Sidebar Item
        </li>
      </ul>
    </div>
  );
}
