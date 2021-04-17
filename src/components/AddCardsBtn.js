import React from "react"
import { Link, useRouteMatch } from "react-router-dom";


function AddCardsBtn () {
    const {url} = useRouteMatch()
    return (
      <Link to={`${url}/cards/new`} type="button" style={{margin:"0 0 0 10px"}} class="btn btn-primary">
        Add Cards
      </Link>
    );}

export default AddCardsBtn