import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { PencilOutline } from "react-ionicons";


function EditCardBtn({ cardId }) {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}/cards/${cardId}/edit`} className="btn btn-secondary container">
      <PencilOutline color={"#00000"} title="edit-card" />
    </Link>
  );
}

export default EditCardBtn;
