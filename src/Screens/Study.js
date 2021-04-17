import React, { useEffect, useState } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import { ReloadOutline, ChevronForwardOutline } from "react-ionicons";
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
  const { url } = useRouteMatch();

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
        window.open("/");
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
    <div class="d-flex flex-column">
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
              <Link to={url}>{currentDeck.name}</Link>
            </li>
            <li class="breadcrumb-item active">Study</li>
          </ol>
        </nav>
      </div>

      <div class="container-fluid d-flex justify-content-center">
        <h2>{currentDeck.name}: Study</h2>
      </div>
      <div class="container-fluid card d-flex justify-content-center col-9">
        {currentCards.length > 2 ? (
          <div class="card-body">
            <h4>
              Card {currentCard} of {currentCards.length}
            </h4>
            <p>{flip ? cardInfo.front : cardInfo.back}</p>

            <div class="container d-flex">
              <div class="row">
                {flip ? (
                  <button
                    type="btn"
                    onClick={handleFlip}
                    class="btn btn-secondary"
                  >
                    Flip
                    <ReloadOutline
                      color={"#00000"}
                      title={"flip-card"}
                      style={{ marginLeft: "10px" }}
                    />
                  </button>
                ) : (
                  <button
                    type="btn"
                    onClick={handleClick}
                    class="btn btn-primary"
                  >
                    Next
                    <ChevronForwardOutline
                      color={"#00000"}
                      title={"next-card"}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div class="card-body">
            <h4>Not enough cards</h4>
            <p>
              You need at least 3 cards to study. There
              {currentCards.length > 1 ? " are " : " is "}
              {currentCards.length}
              {currentCards.length > 1 ? " cards " : " card"} in this deck.
            </p>
            <div class="container d-flex">
              <div class="row">
                <AddCardsBtn/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Study;
