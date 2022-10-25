import React from "react"

export default function Mode(props) {

    const {mode, setDifficulty, difficulty} = props

    const isSelected = mode === difficulty
    const color = isSelected ? "white" : "black"
    let backgroundColor = "gray"
    if (difficulty === "easy") {
        backgroundColor = isSelected ? "darkgreen" : "green"
    } else if (difficulty === "medium") {
        backgroundColor = isSelected ? "darkorange" : "orange"
    } else if (difficulty === "hard") {
        backgroundColor = isSelected ? "darkred" : "red"
    }
    const style = {
        "color": color,
        "backgroundColor": backgroundColor,
        "fontWeight": isSelected ? "bold" : "normal"
    }

    return (
        <div className="mode" style={style} onClick={() => setDifficulty(mode)}>{mode}</div>
    )
}