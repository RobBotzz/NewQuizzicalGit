import React from "react"
import Answer from "./Answer.js"

export default function Question(props) {
    
    const {question, answers, isFinished, handleScoreChange} = props
    
    const [objAnswers, setObjAnswers] = React.useState(() => {
        let temp = []
        for (let i = 0; i < answers.length; i+= 1) {
            temp.push({
                id: i,
                ans: answers[i],
                isSelected: false,
                isCorrect: i < answers.length - 1 ? false : true
            })
        }
        temp = shuffle(temp)
        return temp
    })
    
     function handleClick(ans) {
        if (!isFinished) {
            setObjAnswers(prevAnswers => {
                return prevAnswers.map(prevAnswer => 
                    prevAnswer.ans === ans ?
                    {id: prevAnswer.id, ans: prevAnswer.ans, isCorrect: prevAnswer.isCorrect, isSelected: true} :
                    {id: prevAnswer.id, ans: prevAnswer.ans, isCorrect: prevAnswer.isCorrect, isSelected: false}
                )
            })
            handleScoreChange(question, ans === answers[answers.length - 1])     
        }
    }
    
    const buttonsArr = objAnswers.map((answer) => {
        return <Answer 
                    key={answer.id} 
                    answer={answer.ans} 
                    isSelected={answer.isSelected} 
                    isCorrect={answer.isCorrect}
                    isFinished={isFinished}
                    handleClick={handleClick}
                />
    })
    
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    return (
        <div>
            <div className="question" dangerouslySetInnerHTML={{__html: question}}/>
            <div className="answers">
                {buttonsArr}
            </div>
        </div>
    )
}

