import { useState } from "react";
import Header from "./Header";
import Feedback from "./Feedback";
import Statistics from "./Statistics";

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setProps = {setGood, setBad, setNeutral}
  const props = {good, neutral, bad}

  return (
    <div>
      <Header title={"Give feedback"} heading={'h1'}/>
      <Feedback setProps={setProps} props={props} />
      <Header title={"statistics"} heading={'h2'}/>
      <Statistics props={props} />
    </div>
  )
}

export default App
