import React from "react";
import { Link, useParams } from "react-router-dom";
import { AddOutline  } from "react-ionicons";

function AddCardsBtn() {
  const {deckId} = useParams()
  return (
    <Link
      to={`/decks/${deckId}/cards/new`}
      type="button"
      style={{ margin: "0 0 0 10px" }}
      className="btn btn-primary"
    >
      <AddOutline  color={"#00000"} title={"add-cards"} style={{marginRight:"10px"}} />
      Add Cards
    </Link>
  );
}

export default AddCardsBtn;
