import React, { useEffect } from "react";
import { useRouteMatch, useParams, useHistory } from "react-router-dom";
import { createCard, updateCard, readCard, readDeck } from "../utils/api/index";

function EditOrAddCard({
  currentDeck,
  setCurrentDeck,
  currentCard,
  setCurrentCard,
}) {
  const { path } = useRouteMatch();
  const marginLeft = { margin: "0 0 0 10px" };
  const { deckId, cardId } = useParams();
  const history = useHistory();
  console.log(path)
  /*
  useEffect(() => {
    if (path === `/decks/:deckId/cards/new`) {
      readDeck(deckId).then(setCurrentDeck);
      console.log(1)
      setCurrentCard({
        ...currentCard,
        front: "Front of card",
        back: "Back of card",
      });
    } else {
        console.log(2)
      readCard(cardId).then(setCurrentCard);
    }
  }, []);
*/
  function handleSubmit(event) {
    if (path === `/decks/:deckId/cards/new`) {
      event.preventDefault();
      createCard(deckId, currentCard);
      alert("Your new card was added to the deck!");
      setCurrentCard(
        (prevState) =>
          (prevState = {
            ...currentCard,
            front: "Front of card",
            back: "Back of card",
          })
      );
    } else {
      event.preventDefault();

      if (window.confirm("Are you sure you would like to edit this card?")) {
        updateCard(currentCard);
        goBack();
      }
    }
  }

  function handleChange({ target }) {
    if (path === `/decks/:deckId/cards/new`) {
      setCurrentCard(
        (prevState) =>
          (prevState = {
            ...currentCard,
            [target.name]: target.value,
          })
      );
    } else {
      setCurrentCard(
        (prevState) =>
          (prevState = {
            ...currentCard,
            [target.name]: target.value,
          })
      );
    }
  }

  function goBack() {
    history.push(`/decks/${deckId}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="front" style={{ width: "100%" }} className="form-label">
          Front
          <textarea
            rows="5"
            className="form-control"
            id="back"
            name="front"
            onChange={handleChange}
            value={currentCard.front}
          />
        </label>
      </div>
      <div className="mb-3">
        <label for="back" style={{ width: "100%" }} className="form-label">
          Back
          <textarea
            rows="5"
            className="form-control"
            id="back"
            name="back"
            onChange={handleChange}
            value={currentCard.back}
          />
        </label>
      </div>
      <button onClick={goBack} type="button" className="btn btn-secondary">
        Cancel
      </button>
      <button type="submit" className="btn btn-primary" style={marginLeft}>
        Submit
      </button>
    </form>
  );
}

export default EditOrAddCard;
