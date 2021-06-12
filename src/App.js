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
  
  var wrong = questionsNumber - score
   
  
  
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
  
 
  const handleAnswer = (...answer) => {
    
      console.log(handleAnswer)

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


      //Save in localStroage
      var questions_json = JSON.stringify(questions)
      
      localStorage.setItem("question", questions_json)
      localStorage.setItem("score", score)
      localStorage.setItem("wrong", wrong)

    }
  

  function pagInitial(){
          window.location = "/"
  }

 function close(){
   document.getElementById("Relatory").style.display = `none`
  }
function show(){
  document.getElementById("Relatory").style.display = `block`
}

var relatory = JSON.parse(localStorage.getItem("question"))

  return  questionsNumber < 1 ? (
    <div className="init">

            <div id="Relatory">

              <h2>
                    Your last Score: {localStorage.getItem("score")}
              </h2> 
              <h2>
                    You wrong: {localStorage.getItem("wrong")}
              </h2> 

                    <ul>
                      { relatory.map(  nquest => (
                      
                      <div key={nquest.correct_answer}>
                      <li  dangerouslySetInnerHTML = {{__html: nquest.question}} />
                      <span> Correct answer: <p> {nquest.correct_answer}</p> </span>
  
                    </div>
      
                         ))}
                     </ul>

                     <div className="lo ba" id="close" onClick={close}> 
                       close
                     </div>
                     
              
            </div>

          <label id="label">How many questions do you want to answer?</label>   
          <input type="number" id="qnum" min="1" placeholder="write a number"></input>
          <div className="lo" onClick={clicar}> 
              Start

          </div>
          <div className="lo" onClick={show}> 
              Last Quiz Scores

          </div>
    </div>
    ) : (  endGame ? (

        <div className="endcontent">
          
          
          <h1>  Your Score was {score} </h1>
          
          <h2> You wrong{wrong}</h2>
          
        <ul>
          {saveQuestion.map(  nquest => (
           
           <div key={nquest.correct_answer}>
           <li  dangerouslySetInnerHTML = {{__html: nquest.question}} />
          <span> Correct answer: <p> {nquest.correct_answer}</p> </span>
                         
            </div>
      
          ))}
        </ul>


          <div className="lo" onClick={pagInitial}> 
                Back to Home
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
