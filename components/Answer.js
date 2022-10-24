import React from "react"

export default function Answer(props) {
    
    const {answer, isSelected, isCorrect, isFinished, handleClick} = props
    
    let color = "#293264"
    let backgroundColor = "white"
    let border = "2px solid #293264"
    if (isFinished) {
        if (isCorrect) {
            color = "#293264"
            backgroundColor = "#94D7A2"
            border = "2px solid #94D7A2"
        } else if (!isCorrect && isSelected) {
            color = "#293264"
            backgroundColor = "#F8BCBC"
            border = "2px solid #F8BCBC"
        } else {
            color = "#293264"
            backgroundColor = "white"
            border = "2px solid #4D5B9E"
        }
    }
    if (!isFinished) {
        if (isSelected) {
            color = "#293264"
            backgroundColor = "#D6DBF5"
            border = "2px solid #D6DBF5"
        }
    }
    
    const styles = {
        color: color,
        backgroundColor: backgroundColor,
        border: border
    }
    
    return (
        <div className="answer" style={styles} onClick={() => handleClick(answer)}>
            <div dangerouslySetInnerHTML={{__html: answer}}/>
        </div>
    )
}