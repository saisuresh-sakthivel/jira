import React from "react";
//import { tickets } from "../data/ticket_data";
import Ticket from "../components/Ticket";
import { workflow } from "../data/ticket_data";

export default function TicketState({
  title,
  dragStartHandler,
  dragoverHandler,
  dropHandler,
  tickets: ticket__col,
}) {
  const tickets = Object.values(ticket__col);
  return (
    <div className="ticket_state">
      <h2>{workflow[title].name}</h2>
      <div
        data-target-id={title}
        className="tickets_container"
        onDragOver={dragoverHandler}
        onDrop={dropHandler}
      >
        {tickets
          .filter((item) => item.current == title)
          .map((item) => (
            <Ticket
              id={item.id}
              key={item.id}
              dragStartHandler={dragStartHandler}
              title={item.title}
            >
              {item.id}
            </Ticket>
          ))}
      </div>
    </div>
  );
}
