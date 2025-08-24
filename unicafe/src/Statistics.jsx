import StatisticLine from "./StatisticLine";

const Statistics = ({props}) => {
  const {good, neutral, bad} = props;
  const total = good + neutral + bad;
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / 3; // calc average
  console.log((good * 1) + (neutral * 0) + (bad * -1))
  const totalScore = (good * 1) + (neutral * 0) + (bad * -1)
  const per = (totalScore / (good * 1)) * 100;
  return (
    <table>
      <tbody>
        <StatisticLine value={good} text={"good"} />
        <StatisticLine value={neutral} text={"neutral"} />
        <StatisticLine value={bad} text={"bad"} />
        <StatisticLine value={total} text={"all"} />
        <StatisticLine value={average} text={"average"} />
        <StatisticLine value={`${per} %`} text={"positive"} />
      </tbody>
    </table>
  )
}

export default Statistics