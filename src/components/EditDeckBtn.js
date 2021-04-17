import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { PencilOutline  } from "react-ionicons";

function EditDeckBtn() {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}/edit`} class="btn btn-secondary">
      <PencilOutline  color={"#00000"} title={"edit-deck"} style={{marginRight:"10px"}} />
      Edit
    </Link>
  );
}

export default EditDeckBtn;
