import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import EditOrAddCard from "../components/EditOrAddCard";
import { createCard, readDeck } from "../utils/api/index";

function AddCards({ currentCard, setCurrentCard, currentDeck, setCurrentDeck }) {
  const marginLeft = { margin: "0 0 0 10px" };
  const { deckId } = useParams();
  const history = useHistory()

  useEffect(() => {
    readDeck(deckId).then(setCurrentDeck)
    console.log(3)
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
          <EditOrAddCard setCurrentDeck ={setCurrentDeck} setCurrentCard={setCurrentCard} currentCard={currentCard} currentDeck={currentDeck}/>
        </div>
      </div>
    </>
  );
}

export default AddCards;
