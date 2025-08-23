import Review from "./Review";

const Statistics = ({props}) => {
  const {good, neutral, bad} = props;
  const total = good + neutral + bad;
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / 3; // calc average
  console.log((good * 1) + (neutral * 0) + (bad * -1))
  const totalScore = (good * 1) + (neutral * 0) + (bad * -1)
  const per = (totalScore / (good * 1)) * 100;
  return (
    <div>
      <Review review={good} text={"good"} />
      <Review review={neutral} text={"neutral"} />
      <Review review={bad} text={"bad"} />
      <Review review={total} text={"all"} />
      <Review review={average} text={"average"} />
      <Review review={per} text={"positive"} />
    </div>
  )
}

export default Statistics