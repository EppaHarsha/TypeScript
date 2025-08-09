type buttonProps={
    handleClick(event:React.MouseEvent<HTMLButtonElement>):void;
}
const Button = (props:buttonProps) => {
  return (
    <button onClick={(event)=>{props.handleClick(event)}}>Click Me!</button>
  )
}

export default Button