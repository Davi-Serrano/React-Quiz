import { set } from "mongoose";
import { useEffect, useState } from "react"


import "./App.css"

import { Quest } from "./components"

function App() {
  const [questions,  setQuestions]  = useState([]);
  const [currentIndex, setCurrentIndex ] = useState(0)
  const [ score, setScore] = useState(0);
  const [endGame, setGameEnd] = useState(false)
  const [ questionsNumber, setQuestionsNumber] = useState(0)
  const [ saveQuestion, setSaveQuestion] = useState([]);
  const [ saveAnswer, setSaveAnswer] = useState([]);
   
  


var api = `https://opentdb.com/api.php?amount=${questionsNumber}`
  

function clicar(){
  var num = document.getElementById("qnum").value

  setQuestionsNumber(num)

}
  useEffect (() => {
  fetch(api)
  .then( (res) => res.json ())
    .then((data) => {
      setQuestions(data.results);
    }); 
  }, [questionsNumber]);
  
 
  const handleAnswer = (answer) => {
    setSaveQuestion([...questions])
    

    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex);
    
    if(answer === questions[currentIndex].
      correct_answer){
        setScore(score + 1)    
      }
      if(newIndex >= questions.length){
        setGameEnd(true);
      }
    }
    
    console.log(saveAnswer)

  function pagInitial(){
          window.location = "/"
  }
  return  questionsNumber < 1 ? (
    <div className="init">

          <label id="label">Question do you want answer?</label>   
          <input type="number" id="qnum" requried min="1" placeholder="escreva seu numero"></input>
          <div className="lo" onClick={clicar}> 
              Clique

          </div>
    </div>
    ) : (  endGame ? (

        <div className="container">
          <h1>  Your Score is {score} </h1>
          
          <h2> You wrong {questionsNumber - score}</h2>
          
        <ul>
          {saveQuestion.map(  nquest => (
           
           <div key={nquest.correct_answer}>
           <li  dangerouslySetInnerHTML = {{__html: nquest.question}} />
           <p> {nquest.correct_answer}</p> 
                         
            </div>
      
          ))}
        </ul>


          <div className="lo" onClick={pagInitial}> 
                Clique
          </div>
          
        </div>
  
        ) : (
   
          questions.length > 0 ? (
    <div className="container">   
  
       <Quest data={questions[currentIndex]}
       handleAnswer={handleAnswer} />
       
    </div>
  
  ) : (
  
     <div className="container"> 
      <h1>Loading...</h1>
      
      </div>
  
    )));

  
}

export default App;
