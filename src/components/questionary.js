import react from "react"


const Quest = ({
    data: { question, correct_answer, 
    incorrect_answers },
}) => (
    
    <div>
        <div className="question">
            <h1 dangerouslySetInnerHTML = {{ __html: question}}
            
            />
        </div>
        
        <div className="answers">

            <div className="box one">
                <button><h4>{correct_answer}</h4></button>
            </div>
            
            <div className="box one">
                <button><h4>{incorrect_answers[0]}</h4></button>
            </div>
            
            <div className="box one">
                <button><h4>{incorrect_answers[1]}</h4></button>
            </div>
            
            <div className="box one">
                <button><h4>{incorrect_answers[2]}</h4></button>
            </div>


        </div>
      </div>
)

export default Quest