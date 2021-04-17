import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function EditDeckBtn() {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}/edit`} class="btn btn-secondary">
      Edit
    </Link>
  );
}

export default EditDeckBtn;
