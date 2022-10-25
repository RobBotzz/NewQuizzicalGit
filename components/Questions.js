import React from "react"
import Question from "./Question.js"

export default function Questions(props) {
    
    const [questions, setQuestions] = React.useState([])
    const [isFinished, setIsFinished] = React.useState(false)
    
    const [restart, setRestart] = React.useState(false)
    const [score, setScore] = React.useState([])
    
    function handleScoreChange(question, value) {
        let questionId = -1
        for (let i = 0; i < questions.length; i += 1) {
            if (question === questions[i].question) {
                questionId = i
            }
        }
        setScore(prevScore => {
            return prevScore.map((obj) => {
                if (obj.id === questionId)
                    return {id: obj.id, value: value}
                else
                    return obj
            })
        })
    }
    
    React.useEffect(() => {
        fetch(props.triviaDB)
        .then((data) => data.json())
        .then((data) => setQuestions(data.results))
    }, [restart])

    React.useEffect(() => {
        setIsFinished(false)
    }, [questions])

    React.useEffect(() => {
        setScore(() => {
            let temp = []
            for (let i = 0; i < questions.length; i += 1) {
                temp.push({id: i, value: false})
            }
            return temp
        })
    }, [questions])
    
    const questionArr = questions.map((question) => {
        const temp = [...question.incorrect_answers, question.correct_answer]
        return <Question 
                    key={question.question} 
                    question={question.question} 
                    answers={temp}
                    isFinished={isFinished}
                    handleScoreChange={handleScoreChange}
                />
    })
    
    function handleFinish() {
        if (!isFinished) {
            setIsFinished(true)
        } else {
            setRestart(prev => !prev)
        }
    }

    function getScore() {
        let counter = 0
        for (let i = 0; i < score.length; i += 1) {
            if (score[i].value)
                counter += 1
        }
        return counter
    }

    return (
        <div id="quizEl">
                {questions.length !== 0 && <h2 id="modeTitle">{props.difficulty[0].toUpperCase() + props.difficulty.substring(1)}</h2>}
               {questionArr}
                <div id="resultDiv">
                    {isFinished && <p id="resultScore">You scored {getScore()}/{questions.length} correct answers</p>}
                    {questions.length !== 0 && <button id="checkButton" onClick={() => handleFinish()}>
                        {!isFinished ? "Check answers" : "Play again"}
                    </button>}
                </div>
                <svg className="yellowBlob" width="126" height="131" viewBox="0 0 126 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M63.4095 71.3947C35.1213 40.8508 -2.68211 11.7816 1.17274 -29.6933C5.43941 -75.599 39.854 -115.359 82.4191 -133.133C122.797 -149.994 170.035 -140.256 205.822 -115.149C235.947 -94.0141 236.823 -53.8756 246.141 -18.271C256.17 20.0508 282.521 60.8106 260.501 93.7792C237.538 128.159 188.991 133.432 147.931 128.768C112.318 124.723 87.7505 97.6768 63.4095 71.3947Z" fill="#FFFAD1"/>
                </svg>
                <svg className="blueBlob" width="65" height="62" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M-38.919 2.96445C-10.8241 1.07254 20.4975 -5.87426 40.8434 11.5469C63.3629 30.8293 69.9281 62.0589 61.4141 88.8747C53.3376 114.313 28.2818 132.992 -0.0909882 140.475C-23.9759 146.775 -45.6063 132.093 -68.3914 123.11C-92.9153 113.441 -125.606 110.575 -133.794 87.7612C-142.333 63.9714 -124.677 39.0277 -104.912 21.3621C-87.7687 6.03978 -63.0936 4.59238 -38.919 2.96445Z" fill="#DEEBF8"/>
                </svg>
        </div>
    )
}