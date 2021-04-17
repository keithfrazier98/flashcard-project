import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck, listDecks } from "../utils/api/index";

function CreateDeck({ setCurrentDecks, currentDecks, deck, setDeck }) {
  const marginLeft = { margin: "0 0 0 10px" };
  const history = useHistory();
  const initialDeck = {
    description: "Enter the description of your new deck.",
    name: "Enter a name for your new deck.",
  }

  useEffect(() => {
    setDeck( initialDeck);
  }, []);

  function handleChange({ target }) {
    setDeck(
      prevState =>
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
    const deckId = currentDecks.length + 1;
    const newDeck = {
      name: name,
      description: description,
      deckId: deckId,
      cards: [],
    };
    
    createDeck(newDeck);
    listDecks().then(setCurrentDecks);
    history.push(`/decks/${deckId}`)
    setDeck(initialDeck)
  }

  function returnHome() {
    history.push("/");
  }
  return (
    <div>
      <div
        className="container-fluid d-flex justify-content-center"
        style={{ marginBottom: "20px" }}
      >
        <nav aria-label="breadcrum" className="navbar navbar-light bg-light col-9">
          <ol style={{ listStyle: "none", display: "flex" }}>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item">Decks</li>
            <li className="breadcrumb-item active">New</li>
          </ol>
        </nav>
      </div>

      <div className="container col-9">
        <div>
          <h2>Create Deck</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="name" style={{ width: "100%" }} className="form-label">
              Name
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={deck.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <label
              for="description"
              style={{ width: "100%" }}
              className="form-label"
            >
              Description
              <textarea
                rows="5"
                className="form-control"
                id="description"
                name="description"
                onChange={handleChange}
                value={deck.description}
              />
            </label>
          </div>
          <button onClick={returnHome} type="button" className="btn btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" style={marginLeft}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateDeck;
