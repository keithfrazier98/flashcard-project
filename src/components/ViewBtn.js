import React from "react";
import { Link } from "react-router-dom";

function ViewBtn({ deck }) {
  return (
    <Link to={`/decks/${deck.id}`} type="button" className="btn btn-secondary">
      
      View
    </Link>
  );
}

export default ViewBtn;
