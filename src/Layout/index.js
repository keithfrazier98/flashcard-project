import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Screens/Home";
import Study from "../Screens/Study";
import CreateDeck from "../Screens/CreateDeck";
import { decks } from "../data/db.json";
import View from "../Screens/View";
import EditDeck from "../Screens/EditDeck";
import EditCard from "../Screens/EditCard";
import AddCards from "../Screens/AddCards";

function Layout() {
  const [currentDecks, setCurrentDecks] = useState(decks);
  const [currentDeck, setCurrentDeck] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(1);
  const [cardInfo, setCardInfo] = useState({
    id: 1,
    front: "",
    back: "",
    deckId: 1,
  });
  const [deck, setDeck] = useState({});

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <Home
              currentCards={currentCards}
              setCurrentCards={setCurrentCards}
            />
          </div>
        </Route>
        <Route path="/decks/:deckId/study">
          <Study
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
            currentDeck={currentDeck}
            setCurrentDeck={setCurrentDeck}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            currentCards={currentCards}
            setCurrentCards={setCurrentCards}
          />
        </Route>
        <Route path="/decks/new">
          <CreateDeck
            currentDecks={currentDecks}
            setCurrentDecks={setCurrentDecks}
            deck={deck}
            setDeck={setDeck}
          />
        </Route>
        <Route path={"/decks/:deckId/cards/new"}>
          <AddCards currentDeck={currentDeck} setCurrentCard={setCurrentCard} currentCard={currentCard} setCurrentDeck={setCurrentDeck}/>

        </Route>

        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            currentDeck={currentDeck}
          />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck
            currentDeck={currentDeck}
            setCurrentDeck={setCurrentDeck}
            deck={deck}
            setDeck={setDeck}
          />
        </Route>
        <Route path="/decks/:deckId">
          <View
            currentDecks={currentDecks}
            setCurrentDecks={setCurrentDecks}
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
            currentCard={currentCard}
            currentDeck={currentDeck}
            setCurrentDeck={setCurrentDeck}
            setCurrentCards={setCurrentCards}
            currentCards={currentCards}
          />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck deck={deck} setDeck={setDeck} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Layout;
