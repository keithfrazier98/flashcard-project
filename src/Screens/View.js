import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api/index";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import DeleteCardBtn from "../components/DeleteCardBtn";
import EditDeckBtn from "../components/EditDeckBtn";
import StudyBtn from "../components/StudyBtn";
import DeleteDeckBtn from "../components/DeleteDeckBtn";
import EditCardBtn from "../components/EditCardBtn";
import AddCardsBtn from "../components/AddCardsBtn";

function View({
  setCardInfo,
  currentCard,
  currentDeck,
  setCurrentDeck,
  setCurrentCards,
  currentCards,
}) {
  const navFont = { color: "white" };
  const { deckId } = useParams();
  const margin = { margin: "0 0 0 10px", color: "white" };
  const { url } = useRouteMatch();
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
        
      }

      setCurrentDeck(result);
      setCurrentCards(result.cards);
    }

    getDeck();
  }, [currentCard]);

  function cardList() {
    let list = null
    if (currentCards.length > 0) {
       list = currentCards.map((card) => {
        //console.log(card);
        return (
          <div
            data-deckid={card.deckId}
            id={card.id}
            class="container card col"
            style={{ margin: "20px 0 20px 0 ", padding: "20px 0 20px 0" }}
          >
            <div class="d-flex flex-row align-items-center">
              <p class="col-5">{card.front}</p>
              <p class="col-5">{card.back}</p>
              <div class="d-flex flex-column col-2 justify-content-end">
                <div>
                  <EditCardBtn cardId={card.id} />
                </div>
                <div>
                  <DeleteCardBtn setCurrentCards={setCurrentCards} />
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      list = <p>There are no cards in this deck!</p>
    }


    return list;
  }

  const list = cardList();
  return (
    <>
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
              Decks
            </li>
            <li class="breadcrumb-item active">{currentDeck.name}</li>
          </ol>
        </nav>
      </div>
      <div
        class="card container-fluid col-9"
        style={{ margin: "margin: 20px 20px 20px 20px " }}
      >
        <div class="card-body">
          <h3 class="card-title">{currentDeck.name}</h3>
          <div class="card-text">{currentDeck.description}</div>
          <div class="container">
            <div class="row" style={{ marginTop: "20px" }}>
              <div class="containter col">
                <EditDeckBtn />
                <StudyBtn />
                <AddCardsBtn />
              </div>
              <DeleteDeckBtn />
            </div>
          </div>
        </div>
      </div>
      <div class="container col-9" style={{ marginTop: "10px" }}>
        <h2>Cards</h2>
        <div>{list}</div>
      </div>
    </>
  );
}

export default View;
