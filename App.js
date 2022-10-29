import React from "react"
import Start from "./components/Start.js"
import Questions from "./components/Questions.js"

export default function App() {
    
    const [hasStarted, setHasStarted] = React.useState(false)
    const [triviaDB, setTriviaDB] = React.useState("https://the-trivia-api.com/api/questions?limit=5&tags=disney")
    const [mode, setMode] = React.useState("medium")
    
    React.useEffect(() => {
        //setTriviaDB("https://opentdb.com/api.php?amount=5&difficulty=" + mode)
        setTriviaDB("https://the-trivia-api.com/api/questions?limit=5&tags=disney")
    }, [mode])

    return (
        hasStarted ? 
        <Questions triviaDB={triviaDB} setHasStarted={setHasStarted} difficulty={mode}/> : 
        <Start setDifficulty={setMode} difficulty={mode} setHasStarted={setHasStarted} />
    )
}