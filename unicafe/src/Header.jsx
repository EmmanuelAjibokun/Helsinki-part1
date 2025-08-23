const Header = ({heading, title}) => {
  if (heading == 'h1') {
    return (
      <h1>{title}</h1>
    )
  } else if (heading == 'h2') {
    return (
      <h2>{title}</h2>
    )
  }
}

export default Header