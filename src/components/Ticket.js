import React from "react";

export default function Ticket({ title }) {
  return (
    <div draggable="true" className="ticket">
      {title}
    </div>
  );
}
