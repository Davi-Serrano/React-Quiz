import { useEffect, useState } from "react"
import { Input } from "reactstrap";

import "./App.css"

import { Quest } from "./components"

function App() {
  const [questions,  setQuestions]  = useState([]);
  const [currentIndex, setCurrentIndex ] = useState(0)
  const [ score, setScore] = useState(0);
  const [endGame, setGameEnd] = useState(false)
   
  var api = `https://opentdb.com/api.php?amount=10`

  useEffect (() => {
       fetch(api)
      .then( (res) => res.json ())
        .then((data) => {
          setQuestions(data.results);
        });

  }, []);

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
  
  return  
  
  endGame ? (

        <div className="container"><h1>  Your Score is {score} </h1></div>
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
    ));

  
}

export default App;
