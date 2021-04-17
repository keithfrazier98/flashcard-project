import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { AddOutline } from "react-ionicons";

function AddCardsBtn() {
  const { url } = useRouteMatch();
  return (
    <Link
      to={`${url}/cards/new`}
      type="button"
      style={{ margin: "0 0 0 10px" }}
      class="btn btn-primary"
    >
      <AddOutline color={"#00000"} title={"add-cards"} style={{marginRight:"10px"}} />
      Add Cards
    </Link>
  );
}

export default AddCardsBtn;
