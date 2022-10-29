import React from "react"
import Start from "./components/Start.js"
import Questions from "./components/Questions.js"

export default function App() {
    
    const [hasStarted, setHasStarted] = React.useState(false)
    const [triviaDB, setTriviaDB] = React.useState("https://the-trivia-api.com/api/questions?limit=5&difficulty=medium")
    const [mode, setMode] = React.useState("mixed")
    const [category, setCategory] = React.useState("")
    
    React.useEffect(() => {
        //setTriviaDB("https://opentdb.com/api.php?amount=5&difficulty=" + mode)
        let modeString = ""
        let categoryString = ""
        if (mode !== "mixed") 
            modeString = "&difficulty=" + mode
        if (category !== "")
            categoryString = "&tags=" + category
        setTriviaDB("https://the-trivia-api.com/api/questions?limit=5" + modeString + categoryString)
    }, [mode, category])

    React.useEffect(() => {

    }, [category])

    return (
        hasStarted ? 
        <Questions triviaDB={triviaDB} setHasStarted={setHasStarted} difficulty={mode}/> : 
        <Start setDifficulty={setMode} difficulty={mode} setCategory={setCategory} category={category} setHasStarted={setHasStarted} />
    )
}