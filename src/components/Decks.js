import React from "react";
import View from "./View";
import Study from "./Study";
import Delete from "./Delete";

function Decks({ currentDecks, setCurrentDecks }) {
  function createDeckCards(decks) {
    //map current decks to deckCards variable, creating a list of html elements to display on home screen
    const deckCards = decks.map((deck) => {
      const { id, name, description } = deck;
      return (
        <div
          class="card"
          id={`${id}`}
          style={{ margin: "margin: 20px 20px 20px 20px " }}
        >
          <div class="card-body">
            <h3 class="card-title">{name}</h3>
            <div class="card-text">{description}</div>
            <div class="container">
              <div class="row">
                <div class="card-link">{<View />}</div>
                <div class="card-link">{<Study />}</div>
                <div class="card-link">
                  {
                    // pass deck state to delete to handle deletion
                    <Delete
                      setCurrentDecks={setCurrentDecks}
                      currentDecks={currentDecks}
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

  const deckCards = createDeckCards(currentDecks);
  return <>{deckCards}</>;
}

export default Decks;
