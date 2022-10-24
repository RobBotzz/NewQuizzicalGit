import React from "react"
import Start from "./components/Start.js"
import Questions from "./components/Questions.js"

export default function App() {
    
    const [hasStarted, setHasStarted] = React.useState(false)
    const [triviaDB, setTriviaDB] = React.useState("https://opentdb.com/api.php?amount=5")
    const [isHard, setIsHard] = React.useState(false)
    
    function setGame(amount, difficulty, category) {
        setTriviaDB("https://opentdb.com/api.php?amount=" + amount + "&difficulty=" + difficulty)
    }

    function setHard() {
        setTriviaDB("https://opentdb.com/api.php?amount=5&difficulty=hard")
        setIsHard(true)
    }

    return (
        hasStarted ? 
        <Questions triviaDB={triviaDB} setHasStarted={setHasStarted}/> : 
        <Start isHard={isHard} setHard={setHard} setHasStarted={setHasStarted} />
    )
}