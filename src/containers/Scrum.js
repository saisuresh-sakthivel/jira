import React from "react";
import { status } from "../data/ticket_data";
import TicketState from "./TicketState";
import Search from "../components/Search";

const Scrum = () => {
  return (
    <>
      <Search />
      <div className="ticket_board">
        {status.map((item) => (
          <TicketState title={item}></TicketState>
        ))}
      </div>
    </>
  );
};

export default Scrum;
