import React from "react";
import { deleteDeck, listDecks } from "../utils/api/index";
import { useRouteMatch, useParams, useHistory } from "react-router-dom";

//delete component to return delete button and handle deletion of deck

function DeleteDeckBtn({ setCurrentDecks }) {
  //create newDecks variable in Delete scope, to be set by deleteDeck and returned by Delete
  const { path } = useRouteMatch();
  const { deckId } = useParams();
  const history = useHistory()
  function deleter(event) {

    const id = event.target.closest(".card").id;

    // if user confirms delete, filter decks by comparing index to deck id and assign result to newDecks
    if (window.confirm("Are you sure you want to delete this deck?")) {
      try {
        if (path === "/decks/:deckId") {
          deleteDeck(deckId);
          history.push("/");
        } else {
          deleteDeck(id);
        }
        listDecks().then((response) => {
          setCurrentDecks((prevState) => (prevState = response));
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
      <div className="d-flex">
        <button
          className="btn btn-danger"
          onClick={deleter}
        >
          <div>
          </div>
        </button>
      </div>
  );
}

export default DeleteDeckBtn;
