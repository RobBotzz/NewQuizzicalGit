import React from "react"

export default function Mode(props) {

    const {mode, setDifficulty, difficulty} = props

    const isSelected = mode === difficulty
    const color = isSelected ? "white" : "black"
    let backgroundColor = "gray"
    if (difficulty === "mixed") {
        backgroundColor = isSelected ? "gray" : "lightgray"
    } else if (difficulty === "easy") {
        backgroundColor = isSelected ? "#00AA00" : "#86D277"
    } else if (difficulty === "medium") {
        backgroundColor = isSelected ? "darkorange" : "orange"
    } else if (difficulty === "hard") {
        backgroundColor = isSelected ? "darkred" : "#FF6666"
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