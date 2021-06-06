import { useEffect, useState } from "react"


import "./App.css"

import { Quest } from "./components"

function App() {
  const [questions,  setQuestions]  = useState([]);
  const [currentIndex, setCurrentIndex ] = useState(0)
  const [ score, setScore] = useState(0);
  const [endGame, setGameEnd] = useState(false)
  const [ ap, setAp] = useState(0)
   
  


var api = `https://opentdb.com/api.php?amount=${ap}`
  

function clicar(){
  var ox = document.getElementById("qnum").value

      setAp(ox)

}


  useEffect (() => {
       fetch(api)
      .then( (res) => res.json ())
        .then((data) => {
          setQuestions(data.results);
        });

  }, [ap]);

  const handleAnswer = (answer) => {
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
  function pagInitial(){
          window.location = "/"
  }

  return  ap < 1 ? (
    <div className="init">

          <label id="label">Question do you want answer?</label>   
          <input type="nummber" id="qnum" placeholder="escreva seu numero"></input>
          <div class="lo" onClick={clicar}> 
              Clique

          </div>
    </div>
    ) : (  endGame ? (

        <div className="container">
          <h1>  Your Score is {score} </h1>
          
          <h2> You wrong {ap - score}</h2>
          
          <div class="lo" onClick={pagInitial}> 
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
