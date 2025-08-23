import Review from "./Review";

const Content = ({props}) => {
  const {good, neutral, bad} = props;
  return (
    <div>
      <Review review={good} text={"good"} />
      <Review review={neutral} text={"neutral"} />
      <Review review={bad} text={"bad"} />
    </div>
  )
}

export default Content