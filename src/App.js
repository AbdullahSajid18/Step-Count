import { useState } from 'react';
import './App.css';

function App() {
  const date = new Date();
  let simplifyDate = date.toDateString()
  const [counter , setCounter] = useState([simplifyDate]);
  const [stepCounter , setStepCounter] = useState(1);
  const [countingCounter , setCountingCounter] = useState(0);



  const stepMinusHandler = ()=> {
    if(stepCounter > 1) setStepCounter(stepCounter - 1) 
  };
  const stepPlusHandler = ()=> {
    setStepCounter(stepCounter + 1)
  };

  

  // Addition Function
  const addCounterHandler = ()=> {
    setCountingCounter(countingCounter + stepCounter)
    const dateIncrimentation = date.setDate(date.getDate() + (countingCounter + stepCounter))
    const setDate = new Date(dateIncrimentation)
    simplifyDate = setDate.toDateString()
    setCounter(simplifyDate)
    setCountingCounter(countingCounter + stepCounter)
  };


  // Subtract Function

  const subtractCounterHandler = ()=> {
    if (countingCounter === 0) alert('sorry')
       setCountingCounter (countingCounter - stepCounter)
      const newDate = new Date(counter)
      const dateDecrementation = newDate.setDate(newDate.getDate() -  stepCounter);
      const dateSet = new Date(dateDecrementation)
      const onlyDate = dateSet.toDateString();
      setCounter(onlyDate);    
  };


  return (
    <div className="App">
     <div className='stepDiv'>
     <button onClick={stepMinusHandler}>-</button>
     <h3 className='countStep'>Step: <h3 className='stepCounter'>{stepCounter}</h3></h3>
     <button onClick={stepPlusHandler}>+</button>
     </div>
     <div className='divCount'>
      <button onClick={subtractCounterHandler}>-</button>
      <h3 className='countContent'>Count: <h3 className='count'>{countingCounter}</h3></h3>
      <button onClick={addCounterHandler}>+</button>
     </div>
      
     <p className="showContent">
        <span>
        {countingCounter === 0
            ? ""
            : countingCounter === 1
              ? countingCounter + " day from "
              : countingCounter === -1
                ? countingCounter + " day from "
                : countingCounter + " days from "}
        </span>
        Today is {`${counter} 😊`}
      </p>

    </div>
  );
};

export default App;
