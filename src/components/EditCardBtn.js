import React from "react";
import { Link, useRouteMatch } from "react-router-dom";


function EditCardBtn({ cardId }) {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}/cards/${cardId}/edit`} className="btn btn-secondary container">
    </Link>
  );
}

export default EditCardBtn;
