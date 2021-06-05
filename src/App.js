import { useEffect, useState } from "react"

import "./App.css"

import { Quest } from "./components"

function App() {
  
  const [questions,  setQuestions]  = useState([]);
  
  var api = `https://opentdb.com/api.php?amount=10`

  useEffect (() => {
      fetch(api)
      .then( (res) => res.json ())
        .then((data) => {
          setQuestions(data.results);
        });

  }, []);

  const handleAnswer = (answer) => {
    //check for the Answer
  }
  
  return questions.length > 0 ? (
    <div className="container">

      <Quest data={questions[0]} handleAnswer={handleAnswer} />
      

    </div>
    ) : (
      <div className="container"> 
      <h1>Loading...</h1>
      </div>
    ) 
  
}

export default App;
