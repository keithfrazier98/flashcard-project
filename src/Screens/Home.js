import React from "react";
import Decks from "../components/Decks";
import CreateDeckBtn from "../components/CreateDeckBtn";

function Home({
  currentDecks,
  setCurrentDecks,
  currentCards,
  setCurrentCards,
}) {
  console.log(currentDecks);
  return (
    <>
      <CreateDeckBtn />
      <Decks
        setCurrentDecks={setCurrentDecks}
        currentDecks={currentDecks}
        currentCards={currentCards}
        setCurrentCards={setCurrentCards}
      />
    </>
  );
}

export default Home;
