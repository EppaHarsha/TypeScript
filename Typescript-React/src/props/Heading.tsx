type HeadingProps={
    children:string
}

const Heading = (props:HeadingProps) => {
    console.log(props.children)
  return (
    <div>T{props.children}</div>
  )
}

export default Heading