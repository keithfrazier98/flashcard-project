import React, { useEffect, useState } from "react";
import ViewBtn from "./ViewBtn";
import StudyBtn from "./StudyBtn";
import DeleteDeckBtn from "./DeleteDeckBtn";
import { listDecks } from "../utils/api/index";

function Decks({
  currentDecks,
  setCurrentDecks,
  currentCards,
  setCurrentCards,
}) {
  const [deckCards, setDeckCards] = useState(null);

  function createDeckCards(decks) {
    //map current decks to deckCards variable, creating a list of html elements to display on home screen
    const deckCards = decks.map((deck, index) => {
      console.log(deck);
      const { id, name, description, cards } = deck;
      return (
        <div
          class="card"
          id={`${id}`}
          style={{ margin: "margin: 20px 20px 20px 20px " }}
        >
          <div class="card-body container">
            <div class="d-flex justify-content-between">
              <h3 class="card-title">{name}</h3>
              <h6>{cards.length} cards</h6>

            </div>

            <div class="card-text">{description}</div>
            <div class="container">
              <div class="row" style={{marginTop:"10px"}}>
                <div class="card-link">{<ViewBtn deck={deck} />}</div>
                <div class="card-link">{<StudyBtn deck={deck} />}</div>
                <div class="card-link">
                  {
                    // pass deck state to delete to handle deletion
                    <DeleteDeckBtn
                      setCurrentDecks={setCurrentDecks}
                      currentDecks={currentDecks}
                      index={index}
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return deckCards;
  }

  useEffect(() => {
    listDecks().then(createDeckCards).then(setDeckCards)
  }, [currentDecks]);

  return <>{deckCards}</>;
}

export default Decks;
