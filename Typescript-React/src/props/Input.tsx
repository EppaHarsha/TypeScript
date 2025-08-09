type InputProps={
    value:string
    onChangeHandle(e:React.ChangeEvent<HTMLInputElement>):void
}

const Input = (props:InputProps) => {
  // we can directly create handle change function here, instead of passing as argument
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("on change called",e)
  }
  return (
    <div>
        <input type="text" value={props.value} onChange={props.onChangeHandle} />
        <input type="text" value={props.value} onChange={handleChange} />
    </div>
  )
}

export default Input