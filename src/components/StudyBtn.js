import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import { LibraryOutline } from "react-ionicons"

function StudyBtn({ deck }) {
  // studyBtn is called from two different places, so depending on the screen it will have access to the deckID in a different way
  const { url } = useRouteMatch();
  const { deckId } = useParams();

  if (url === "/") {
    return (
      <Link
      to={`/decks/${deck.id}/study`}
      type="button"
      class="btn btn-primary"
    >
      <LibraryOutline color={"#00000"} title={"study-deck"} style={{marginRight:"10px"}} />
      Study
    </Link>
    );
  } else {
    return (
      <Link
        to={`/decks/${deckId}/study`}
        type="button"
        class="btn btn-primary"
        style={{ marginLeft: "10px" }}
      >
        <LibraryOutline color={"#00000"} title={"study-deck"} style={{marginRight:"10px"}} />
        Study
      </Link>
    );
  }
}

export default StudyBtn;
