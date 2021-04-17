import React, { useEffect } from "react";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api/index";

function EditDeck({ currentDeck, setCurrentDeck }) {
  const { url } = useRouteMatch();
  const { deckId } = useParams();
  const marginLeft = { margin: "0 0 0 10px" };
  const history = useHistory()
  useEffect(() => {
    readDeck(deckId).then(setCurrentDeck);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to edit this deck?")) {
      updateDeck(currentDeck);
      goBack()
    } else {
        goBack()
    }
  }

  function handleChange({ target }) {
    setCurrentDeck(
      prevState =>
        (prevState = {
          ...currentDeck,
          [target.name]: target.value,
        })
    );
  }

  function goBack() {
    history.push(`/decks/${deckId}`, "_self");
  }

  return (
    <div>
      <div
        className="container-fluid d-flex justify-content-center"
        style={{ marginBottom: "20px" }}
      >
        <nav aria-label="breadcrum" className="navbar navbar-light bg-light col-9" >
          <ol style={{ listStyle: "none", display: "flex" }}>
            <li claclassNamess="breadcrumb-item">
              <Link to="/">
                Home
              </Link>
            </li>

            <li className="breadcrumb-item">
              <Link to={url} >
              {currentDeck.name}
              </Link>
            </li>
            <li className="breadcrumb-item active"> 
              Edit
            </li>
          </ol>
        </nav>
      </div>

      <div className="container col-9">
        <div>
          <h2>Edit Deck</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div claclassNamess="mb-3">
            <label for="name" style={{ width: "100%" }} className="form-label">
              Name
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentDeck.name}
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
                value={currentDeck.description}
              />
            </label>
          </div>
          <button onClick={goBack} type="button" className="btn btn-secondary">
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

export default EditDeck;
