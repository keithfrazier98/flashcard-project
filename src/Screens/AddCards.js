import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api/index";

function AddCards({ currentCard, setCurrentCard, currentDeck, setCurrrentDeck }) {
  const marginLeft = { margin: "0 0 0 10px" };
  const { deckId } = useParams();
  const history = useHistory()

  useEffect(() => {
    readDeck(deckId).then(setCurrrentDeck)
    setCurrentCard({
      ...currentCard,
      front: "Front of card",
      back: "Back of card",
    });
  }, []);

  function handleSubmit(event) {
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
  }

  function handleChange({ target }) {
    setCurrentCard(
      (prevState) =>
        (prevState = {
          ...currentCard,
          [target.name]: target.value,
        })
    );
  }

  function goBack() {
    history.push(`/decks/${deckId}`);
  }

  return (
    <>
      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginBottom: "20px" }}
      >
        <nav aria-label="breadcrum" class="navbar navbar-light bg-light col-9">
          <ol style={{ listStyle: "none", display: "flex" }}>
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li class="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{currentDeck.name}</Link>
            </li>
            <li class="breadcrumb-item active">{`Add Card`}</li>
          </ol>
        </nav>
      </div>

      <div
        class="card col-9 container"
        style={{ margin: "margin: 20px 20px 20px 20px " }}
      >
        <div class="card-body">
          <h3 class="card-title">{currentDeck.name}: Add Card</h3>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="front" style={{ width: "100%" }} class="form-label">
                Front
                <textarea
                  rows="5"
                  class="form-control"
                  id="back"
                  name="front"
                  onChange={handleChange}
                  value={currentCard.front}
                />
              </label>
            </div>
            <div class="mb-3">
              <label for="back" style={{ width: "100%" }} class="form-label">
                Back
                <textarea
                  rows="5"
                  class="form-control"
                  id="back"
                  name="back"
                  onChange={handleChange}
                  value={currentCard.back}
                />
              </label>
            </div>
            <button onClick={goBack} type="button" class="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" style={marginLeft}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCards;
