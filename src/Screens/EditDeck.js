import React, { useEffect } from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import { listDecks, readDeck, updateDeck } from "../utils/api/index";

function EditDeck({ currentDeck, setCurrentDeck }) {
  const { url } = useRouteMatch();
  const { deckId } = useParams();
  const navFont = { color: "white" };
  const marginLeft = { margin: "0 0 0 10px" };

  useEffect(() => {
    readDeck(deckId).then(setCurrentDeck);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to edit this deck?")) {
      updateDeck(currentDeck);
    } else {
        window.open(`/decks/${deckId}`, "_self")
    }
  }

  function handleChange({ target }) {
    setCurrentDeck(
      (prevState) =>
        (prevState = {
          ...currentDeck,
          [target.name]: target.value,
        })
    );
    console.log(currentDeck);
  }

  function goBack() {
    window.open(`/decks/${deckId}`, "_self");
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
              <Link to={url} >
              {currentDeck.name}
              </Link>
            </li>
            <li class="breadcrumb-item active"> 
              Edit
            </li>
          </ol>
        </nav>
      </div>

      <div class="container col-9">
        <div>
          <h2>Edit Deck</h2>
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
                value={currentDeck.name}
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
                value={currentDeck.description}
              />
            </label>
          </div>
          <button onClick={goBack} type="button" class="btn btn-secondary">
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

export default EditDeck;
