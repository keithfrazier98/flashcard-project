import React from "react";
import { Link } from "react-router-dom";

function CreateDeckBtn() {
  return (
    <Link
      type="button"
      to="/decks/new"
      style={{ margin: "0px 0px 20px 0px" }}
      className="btn btn-primary"
    >
      Create Deck
    </Link>
  );
}
export default CreateDeckBtn;
