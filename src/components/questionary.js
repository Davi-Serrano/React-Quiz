import react from "react"

const Button =  ({ answer, className }) => (
   
   <div className={`box ${className}`}>
        <button> 
            <h4>{answer}</h4>
        </button>
    </div>
)


const Quest = ({
    handleAnswer, data: { question, correct_answer, 
    incorrect_answers },
}) => { 
        const shuffled = [correct_answer, ...
        incorrect_answers].sort(() => Math.random() - 0.5);


    return (
    <div>
        <div className="question">
            <h1 dangerouslySetInnerHTML = {{ __html: question}}
            
            />
        </div>
        
        <div className="answers">
            
            <Button className={correct_answer === shuffled[0] ? 'bg' : '' }
            
            onClick={() => handleAnswer
                (shuffled[0])}
                 answer={shuffled[0]}/>
            <Button className={correct_answer === shuffled[1] ? 'bg' : ''}
            
            onClick={() => handleAnswer
                (shuffled[1])}
                 answer={shuffled[1]}/>
            <Button className={correct_answer === shuffled[2] ? 'bg' : ''}
            
            onClick={() => handleAnswer
                (shuffled[2])}
                 answer={shuffled[2]}/>
            <Button className={correct_answer === shuffled[3] ? 'bg' : ''}
            
            onClick={() => handleAnswer
                (shuffled[3])}
                 answer={shuffled[3]}/>

        </div>
      </div>
)};

export default Quest