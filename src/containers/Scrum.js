import React, { useState } from "react";
import { status, workflow, tickets as ticket__col } from "../data/ticket_data";

import TicketState from "./TicketState";
import Search from "../components/Search";
import { isValidState } from "../utils";

const Scrum = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [tickets, setticket] = useState(ticket__col);
  const handleDragOver = function (e) {
    e.preventDefault();
    //console.log(e.target);
  };
  const handleDrop = function (e) {
    e.preventDefault();
    const progressid = e.target.getAttribute("data-target-id");
    //console.log("isValidState == " + isValidState(progressid));
    if (
      isValidState(progressid, tickets[draggedItem].current) &&
      tickets[draggedItem].current !== progressid
    ) {
      const copy_tickets = JSON.parse(JSON.stringify(tickets));
      copy_tickets[draggedItem].current = progressid;
      setticket(copy_tickets);
    }
    //console.log(e.target.getAttribute("data-target-id"));
  };
  const dragStartHandler = function (id) {
    if (draggedItem !== id) {
      setDraggedItem(id);
    }
  };
  return (
    <>
      <Search />
      <div className="ticket_board">
        {status.map((item) => (
          <TicketState
            dragoverHandler={handleDragOver}
            dropHandler={handleDrop}
            dragStartHandler={dragStartHandler}
            title={item}
            key={item}
            tickets={tickets}
          ></TicketState>
        ))}
      </div>
    </>
  );
};

export default Scrum;
