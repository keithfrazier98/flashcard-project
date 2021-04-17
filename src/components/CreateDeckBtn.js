import React from "react";
import { Link } from "react-router-dom";
import { AddOutline } from "react-ionicons";

function CreateDeckBtn() {
  return (
    <Link
      type="button"
      to="/decks/new"
      style={{ margin: "0px 0px 20px 0px" }}
      className="btn btn-primary"
    >
      <AddOutline color={"#00000"} title={"create-deck"} style={{marginRight:"10px"}} />
      Create Deck
    </Link>
  );
}
export default CreateDeckBtn;
