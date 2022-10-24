import React from "react"
import Start from "./components/Start.js"
import Questions from "./components/Questions.js"

export default function App() {
    
    const [hasStarted, setHasStarted] = React.useState(false)
    
    return (
        hasStarted ? 
        <Questions setHasStarted={setHasStarted}/> : 
        <Start setHasStarted={setHasStarted} />
    )
}