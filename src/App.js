import "./App.css";
import { useState } from "react";
import Button from "./components/button.component/button.component";
import Statistics from "./components/statistics.component/statistics.component";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    setTotal(total + 1);
    return setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setTotal(total + 1);
    return setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setTotal(total + 1);
    return setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good"></Button>
      <Button handleClick={handleNeutralClick} text="Neutral"></Button>
      <Button text="Bad" handleClick={handleBadClick}></Button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
      ></Statistics>
    </div>
  );
};

export default App;
