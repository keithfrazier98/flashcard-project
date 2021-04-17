import React from "react";
import Decks from "../components/Decks";
import CreateDeckBtn from "../components/CreateDeckBtn";

function Home({
  currentDecks,
  setCurrentDecks,
}) {
  return (
    <>
      <CreateDeckBtn />
      <Decks
        setCurrentDecks={setCurrentDecks}
        currentDecks={currentDecks}
      />
    </>
  );
}

export default Home;
