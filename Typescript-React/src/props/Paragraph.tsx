type ParagraphProps={
    children:React.ReactNode;
}

const Paragraph = (props:ParagraphProps) => {
    console.log(props.children)
  return (
    <div>{props.children}</div>
  )
}

export default Paragraph