import React from "react";
import { tickets } from "../data/ticket_data";
import Ticket from "../components/Ticket";
export default function TicketState({ title }) {
  return (
    <div className="ticket_state">
      <h2>{title}</h2>
      {tickets
        .filter((item) => item.current == title)
        .map((item) => (
          <Ticket title={item.title}>{item.id}</Ticket>
        ))}
    </div>
  );
}
