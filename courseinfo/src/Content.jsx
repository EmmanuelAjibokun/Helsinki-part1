import Part from "./Part"

const Content = (props) => {
  const [part1, part2, part3] = props.parts;
  return (
    <div>
      <Part part={part1.name} execises={part1.execises} />
      <Part part={part2.name} execises={part2.execises} />
      <Part part={part3.name} execises={part3.execises} />
    </div>
  )
}

export default Content