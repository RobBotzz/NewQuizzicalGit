import React from "react"
import Start from "./components/Start.js"
import Questions from "./components/Questions.js"

export default function App() {
    
    const [hasStarted, setHasStarted] = React.useState(false)
    const [triviaDB, setTriviaDB] = React.useState("https://the-trivia-api.com/api/questions?limit=5&difficulty=medium")
    const [mode, setMode] = React.useState("mixed")
    const [category, setCategory] = React.useState("")

    const [error, setError] = React.useState(false)
    
    React.useEffect(() => {
        let modeString = ""
        let categoryString = ""
        if (mode !== "mixed") 
            modeString = "&difficulty=" + mode
        if (category !== "")
            categoryString = "&tags=" + category
        setTriviaDB("https://the-trivia-api.com/api/questions?limit=5" + modeString + categoryString)
    }, [mode, category])

    return (
        hasStarted ? 
        <Questions triviaDB={triviaDB} setHasStarted={setHasStarted} difficulty={mode} setError={setError} /> : 
        <Start setDifficulty={setMode} difficulty={mode} setCategory={setCategory} category={category} setHasStarted={setHasStarted} error={error} />
    )
}