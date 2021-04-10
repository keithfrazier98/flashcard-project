import React, {useState} from "react"
import {decks} from "../data/db.json"
import Decks from "../components/Decks"
import CreateDeck from "../components/CreateDeck"

function Home () {

    const [currentDecks, setCurrentDecks] = useState(decks)
    return (
        <>
        <CreateDeck/>
        <Decks setCurrentDecks = {setCurrentDecks} currentDecks = {currentDecks}/>
        </>
    )
}

export default Home