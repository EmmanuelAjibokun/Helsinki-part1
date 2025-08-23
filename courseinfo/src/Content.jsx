import Part from "./Part"

const Content = (props) => {
  return (
    <div>
      <Part part={props.part && props.part[0]} execises={props.execises && props.execises[0]} />
      <Part part={props.part && props.part[1]} execises={props.execises && props.execises[1]} />
      <Part part={props.part && props.part[2]} execises={props.execises && props.execises[2]} />
    </div>
  )
}

export default Content