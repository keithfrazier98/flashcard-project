import React from "react";
import { Link } from "react-router-dom";
//import { EyeOutline } from "react-ionicons";
/* <EyeOutline
        color={"#00000"}
        title={"view-deck"}
        style={{ marginRight: "10px" }}
      /> */
function ViewBtn({ deck }) {
  return (
    <Link to={`/decks/${deck.id}`} type="button" class="btn btn-secondary">
     
      View
    </Link>
  );
}

export default ViewBtn;
