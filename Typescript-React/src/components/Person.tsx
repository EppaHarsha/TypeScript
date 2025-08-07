
type Name={
  first:string
  last:string
}
type personName={
  name:Name
}
function Person(props:personName) {
  return (
    <>
      <h1>{props.name.first} {props.name.last}</h1>
    </>
  );
}

export default Person;
