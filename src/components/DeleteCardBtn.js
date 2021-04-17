import React from "react";
import { deleteCard, listCards } from "../utils/api";


function DeleteDeckBtn({ setCurrentCards }) {
  function deleter(event) {
    if (window.confirm("Do you really want to delete this card you?")) {
      const clickedCard = event.target.closest(".card");
      deleteCard(event.target.closest(".card").id);
      listCards(clickedCard.dataset.deckid).then(setCurrentCards);
    }
  }

  return (
    <div>
      <div>
        <button
          className="btn btn-danger"
          onClick={deleter}
          style={{ marginTop: "10px" }}
        >
          <div className="container d-flex">

           
          </div>
        </button>
      </div>
    </div>
  );
}

export default DeleteDeckBtn;
