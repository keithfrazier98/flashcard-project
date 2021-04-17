import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import AddCardsBtn from "../components/AddCardsBtn";

function Study({
  cardInfo,
  setCardInfo,
  currentCard,
  setCurrentCard,
  currentCards,
  setCurrentCards,
  currentDeck,
  setCurrentDeck,
}) {
  const { deckId } = useParams();
  const history = useHistory();

  const [flip, setFlip] = useState(true);

  function handleFlip() {
    setFlip((current) => (current = !flip));
  }

  function handleClick() {
    if (currentCard < currentCards.length) {
      setCurrentCard((prevState) => (prevState = prevState + 1));
      setFlip((prevState) => (prevState = !flip));
    } else {
      if (window.confirm("Do you want to reset the deck?")) {
        setCurrentCard((prevState) => (prevState = 1));
        setFlip(true);
      } else {
        history.push("/");
      }
    }
  }

  useEffect(() => {
    async function getDeck() {
      const result = await readDeck(deckId);
      const card = currentCard - 1;
      try {
        setCardInfo({
          id: result.cards[card].id,
          front: result.cards[card].front,
          back: result.cards[card].back,
          deckId: result.cards[card].deckId,
        });
      } catch (error) {
        console.log(error);
      }

      setCurrentDeck(result);
      setCurrentCards(result.cards);
    }

    getDeck();
  }, [currentCard]);

  return (
    <div className="d-flex flex-column">
      <div
        className="container-fluid d-flex justify-content-center"
        style={{ marginBottom: "20px" }}
      >
        <nav
          aria-label="breadcrum"
          className="navbar navbar-light bg-light col-9"
        >
          <ol style={{ listStyle: "none", display: "flex" }}>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{currentDeck.name}</Link>
            </li>
            <li className="breadcrumb-item active">Study</li>
          </ol>
        </nav>
      </div>

      <div className="container-fluid d-flex justify-content-center">
        <h2>{currentDeck.name}: Study</h2>
      </div>
      <div className="container-fluid card d-flex justify-content-center col-9">
        {currentCards.length > 2 ? (
          <div className="card-body">
            <h4>
              Card {currentCard} of {currentCards.length}
            </h4>
            <p>{flip ? cardInfo.front : cardInfo.back}</p>

            <div className="container d-flex">
              <div className="row">
                {flip ? (
                  <button
                    type="btn"
                    onClick={handleFlip}
                    className="btn btn-secondary"
                  >
                    flip
                  </button>
                ) : (
                  <button
                    type="btn"
                    onClick={handleClick}
                    className="btn btn-primary"
                  >
                    next
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="card-body">
            <h4>Not enough cards</h4>
            <p>
              You need at least 3 cards to study. There
              {currentCards.length > 1 ? " are " : " is "}
              {currentCards.length}
              {currentCards.length > 1 ? " cards " : " card"} in this deck.
            </p>
            <div className="container d-flex">
              <div className="row">
                <AddCardsBtn />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Study;
