import React from "react";
import { deleteCard, listCards } from "../utils/api";
import { TrashOutline } from "react-ionicons";


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

              {<TrashOutline color={"#00000"} width="50%" />}
           
          </div>
        </button>
      </div>
    </div>
  );
}

export default DeleteDeckBtn;
