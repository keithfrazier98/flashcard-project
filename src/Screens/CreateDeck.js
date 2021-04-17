import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { createDeck, listDecks } from "../utils/api/index";

function CreateDeck({ setCurrentDecks, currentDecks, deck, setDeck }) {
  const navFont = { color: "white" };
  const marginLeft = { margin: "0 0 0 10px" };

  const { url } = useRouteMatch();

  useEffect(() => {
    setDeck({
      description: "Enter the description of your new deck.",
      name: "Enter a name for your new deck.",
    });
  }, []);

  function handleChange({ target }) {
    setDeck(
      (prevState) =>
        (prevState = {
          ...deck,
          [target.name]: target.value,
        })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.children[0].children[0].children[0].value;
    const description = event.target.children[1].children[0].children[0].value;
    const id = currentDecks.length + 1;
    const deckId = currentDecks.length + 1;
    

    const newDeck = { name: name, description: description, deckId: deckId, cards: [] };
    /*setCurrentDecks([
      ...currentDecks,
      { id: id, name: name, description: description, deckId: deckId },
    ]);
    */
    createDeck(newDeck);
    listDecks().then(setCurrentDecks);
  }

  function returnHome() {
    window.open("/", "_self");
  }
  return (
    <div>
      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginBottom: "20px" }}
      >
        <nav aria-label="breadcrum" class="navbar navbar-light bg-light col-9" >
          <ol style={{ listStyle: "none", display: "flex" }}>
            <li class="breadcrumb-item">
              <Link to="/">
                Home
              </Link>
            </li>

            <li class="breadcrumb-item">
              Decks
            </li>
            <li class="breadcrumb-item active"> 
              New
            </li>
          </ol>
        </nav>
      </div>

      <div class="container col-9">
        <div>
          <h2>Create Deck</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="name" style={{ width: "100%" }} class="form-label">
              Name
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                value={deck.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div class="mb-3">
            <label
              for="description"
              style={{ width: "100%" }}
              class="form-label"
            >
              Description
              <textarea
                rows="5"
                class="form-control"
                id="description"
                name="description"
                onChange={handleChange}
                value={deck.description}
              />
            </label>
          </div>
          <button onClick={returnHome} type="button" class="btn btn-secondary">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary" style={marginLeft}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateDeck;
