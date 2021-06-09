const Quest = ({
    
    handleAnswer, data: { question, correct_answer, 
        incorrect_answers },
    }) => { 
        const shuffled = [correct_answer, ...
            incorrect_answers].sort(() => Math.random() - 0.5);
            
            
        
function cancel (){
    window.location = "/"
}

    return (
    <div className="center">
        <div className="question">
            <h1 dangerouslySetInnerHTML = {{ __html: question}}
            
            />
        </div>
        
        <div className="answers">
            
            {shuffled.map( answer => (
                 
                
            <div  className="box">
                <button onClick={() => handleAnswer
                        (answer)}> 
                    <h4>{answer}</h4>
                </button>
            </div>
            
            ))}
                <div onClick={cancel} className="cancel"> 
                    Cancel
                </div>
        </div>
    </div>
)};

export default Quest