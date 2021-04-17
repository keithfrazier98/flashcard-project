import React, { useEffect, useState } from "react";
import ViewBtn from "./ViewBtn";
import StudyBtn from "./StudyBtn";
import DeleteDeckBtn from "./DeleteDeckBtn";
import { listDecks } from "../utils/api/index";

function Decks({ currentDecks, setCurrentDecks }) {
  const [deckCards, setDeckCards] = useState([]);

  function createDeckCards(decks) {
    //map current decks to deckCards variable, creating a list of html elements to display on home screen
    const deckCards = decks.map((deck, index) => {
      const { id, name, description, cards } = deck;
      return (
        <div
          key={index}
          className="card"
          id={`${id}`}
          style={{ margin: "margin: 20px 20px 20px 20px " }}
        >
          <div className="card-body container">
            <div className="d-flex justify-content-between">
              <h3 className="card-title">{name}</h3>
              <h6>{cards.length} cards</h6>
            </div>

            <div className="card-text">{description}</div>
            <div className="container">
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="card-link">{<ViewBtn deck={deck} />}</div>
                <div className="card-link">{<StudyBtn deck={deck} />}</div>
                <div className="card-link">
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
    listDecks().then(createDeckCards).then(setDeckCards);
  }, [currentDecks]);

  return <>{deckCards}</>;
}

export default Decks;
