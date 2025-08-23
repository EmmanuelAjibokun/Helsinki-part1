import Button from "./Button"

const Feedback = ({setProps, props}) => {
  const {setGood, setNeutral, setBad} = setProps;
  const {good, neutral, bad} = props;
  return (
    <div>
      <Button onClick={() => setGood(good + 1)} text={"good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"bad"} />
    </div>
  )
}

export default Feedback