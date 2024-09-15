import React from "react";

export default function Ticket({ id, title, dragStartHandler }) {
  return (
    <div
      onDragStart={() => dragStartHandler(id)}
      draggable="true"
      className="ticket"
    >
      {title}
    </div>
  );
}
