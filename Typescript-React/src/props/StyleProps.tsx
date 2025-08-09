import React from 'react'
type containerProps={
    style:React.CSSProperties
}
export const Container = (props:containerProps) => {
  return (
    <div style={props.style}>Container</div>
  )
}
