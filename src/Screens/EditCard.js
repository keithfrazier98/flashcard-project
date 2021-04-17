import React, { useEffect } from "react";
import { readCard, updateCard } from "../utils/api/index";
import { useParams, Link, useHistory } from "react-router-dom";

function EditCard({ currentCard, setCurrentCard, currentDeck }) {
  const { cardId, deckId } = useParams();
  const marginLeft = { margin: "0 0 0 10px" };
  const history = useHistory()

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
  }

  function goBack() {
    history.push(`/decks/${deckId}`, "_self");
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
              <Link to={`/decks/${deckId}`}>Deck {currentDeck.name}</Link>
            </li>
            <li claclassNamess="breadcrumb-item active">{`Edit Card ${cardId}`}</li>
          </ol>
        </nav>
      </div>
      <div
        className="card col-9 container"
        style={{ margin: "margin: 20px 20px 20px 20px " }}
      >
        <div className="card-body">
          <h3 className="card-title">Edit Card</h3>
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
              <label
                for="back"
                style={{ width: "100%" }}
                className="form-label"
              >
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

export default EditCard;
