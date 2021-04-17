import React from "react"
import {Link} from "react-router-dom"

function ViewBtn ({deck}) {
    return <Link to={`/decks/${deck.id}`} type="button" class="btn btn-secondary">view</Link>
}

export default ViewBtn