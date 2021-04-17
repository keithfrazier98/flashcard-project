import React, { useEffect } from "react";
import { readCard, readDeck, updateCard } from "../utils/api/index";
import { useParams, Link, useHistory } from "react-router-dom";
import EditOrAddCard from "../components/EditOrAddCard";

function EditCard({ setCurrentDeck, currentCard, setCurrentCard, currentDeck }) {
  const { cardId, deckId } = useParams();
  const marginLeft = { margin: "0 0 0 10px" };
  const history = useHistory()

  useEffect(() => {
    readCard(cardId).then(setCurrentCard);
    readDeck(deckId).then(setCurrentDeck)
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
            <li className="breadcrumb-item active">{`Edit Card ${cardId}`}</li>
          </ol>
        </nav>
      </div>
      <div
        className="card col-9 container"
        style={{ margin: "margin: 20px 20px 20px 20px " }}
      >
        <div className="card-body">
          <h3 className="card-title">Edit Card</h3>
          <EditOrAddCard setCurrentCard={setCurrentCard} currentCard={currentCard} currentDeck={currentDeck}/>
        </div>
      </div>
    </>
  );
}

export default EditCard;
