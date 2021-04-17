import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api/index";

function AddCards({ currentCard, setCurrentCard, currentDeck, setCurrentDeck }) {
  const marginLeft = { margin: "0 0 0 10px" };
  const { deckId } = useParams();
  const history = useHistory()

  useEffect(() => {
    readDeck(deckId).then(setCurrentDeck)
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
        className="container-fluid d-flex justify-content-center"
        style={{ marginBottom: "20px" }}
      >
        <nav aria-label="breadcrum" className="navbar navbar-light bg-light col-9">
          <ol style={{ listStyle: "none", display: "flex" }}>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{currentDeck.name}</Link>
            </li>
            <li className="breadcrumb-item active">{`Add Card`}</li>
          </ol>
        </nav>
      </div>

      <div
        className="card col-9 container"
        style={{ margin: "margin: 20px 20px 20px 20px " }}
      >
        <div className="card-body">
          <h3 className="card-title">{currentDeck.name}: Add Card</h3>
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
        </div>
      </div>
    </>
  );
}

export default AddCards;
