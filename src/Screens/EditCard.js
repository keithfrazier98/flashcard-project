import React, { useEffect } from "react";
import { readCard, updateCard } from "../utils/api/index";
import { useParams, Link, useRouteMatch } from "react-router-dom";

function EditCard({ currentCard, setCurrentCard, currentDeck }) {
  const { cardId, deckId } = useParams();
  const { url } = useRouteMatch();
  const marginLeft = { margin: "0 0 0 10px" };


  useEffect(() => {
    readCard(cardId).then(setCurrentCard);
  }, []);


  function handleSubmit(event) {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to edit this card?")) {
      updateCard(currentCard);
      goBack()
    } 
  }

  function handleChange({ target }) {
    setCurrentCard(
      (prevState) =>
        (prevState = {
          ...currentCard,
          [target.name]: target.value,
        })
    );
    console.log(currentDeck);
  }

  function goBack() {
    window.open(`/decks/${deckId}`, "_self");
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
              <Link to={url}>Deck {currentDeck.name}</Link>
            </li>
            <li class="breadcrumb-item active">{`Edit Card ${cardId}`}</li>
          </ol>
        </nav>
      </div>
      <div
        class="card col-9 container"
        style={{ margin: "margin: 20px 20px 20px 20px " }}
      >
        <div class="card-body">
          <h3 class="card-title">Edit Card</h3>
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
              <label
                for="back"
                style={{ width: "100%" }}
                class="form-label"
              >
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

export default EditCard;
