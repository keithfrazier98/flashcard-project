import React from "react";
//delete component to return delete button and handle deletion of deck

function Delete({ currentDecks, setCurrentDecks }) {
  //create newDecks variable in Delete scope, to be set by deleteDeck and returned by Delete
  let newDecks = [];
  function deleteDeck(event) {
    // if user confirms delete, filter decks by comparing index to deck id and assign result to newDecks
    if (window.confirm("Are you sure you want to delete this deck?")) {
      newDecks = currentDecks.filter((deck, index) => {
        if (index + 1 != event.target.closest(".card").id) {
          return deck;
        }
      });
      //set currentDecks to newDecks
      setCurrentDecks(newDecks);
    }
  }

  return (
    <button type="button" onClick={deleteDeck} class="btn btn-danger">
      Delete
    </button>
  );
}

export default Delete;
