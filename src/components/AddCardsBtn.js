import React from "react";
import { Link, useParams } from "react-router-dom";

function AddCardsBtn() {
  const {deckId} = useParams()
  return (
    <Link
      to={`/decks/${deckId}/cards/new`}
      type="button"
      style={{ margin: "0 0 0 10px" }}
      className="btn btn-primary"
    >
      Add Cards
    </Link>
  );
}

export default AddCardsBtn;
