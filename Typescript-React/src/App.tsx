// import Greet from './components/Greet'
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from "./components/Status";
// import Heading from "./components/Heading";
// import Paragraph from "./components/Paragraph";

import Button from "./props/Button";
import { Container } from "./props/StyleProps";
import Input from "./props/Input";

function App() {
  const name = {
    first: "harsha",
    last: "vardhan",
  };

  const names = [
    {
      first: "harsha",
      last: "vardhan",
    },
    {
      first: "aaa",
      last: "bbb",
    },
    {
      first: "ccc",
      last: "ddd",
    },
  ];
  // const handleClick=(event:React.MouseEvent)=>{
  //   console.log("Button is clicked!",event)
  // }
  return (
    <>
      {/* <Greet name='harsha' messageCnt={12} isLoggedIn={false}/>
      <Person name={name}/>
      <PersonList names={names}/> */}
      {/* <Status status="loading" />
      <Heading>This is a heading</Heading>
      <Paragraph>This is a Paragraph
        <Heading>This is a Heading</Heading>
      </Paragraph> */}
      {/* <Button handleClick={(event)=>{console.log("button clicked",event)}}/>
        <Input value="" onChangeHandle={(e)=>{console.log("handle change",e)}}/> */}
        <Container style={{color:"red",backgroundColor:"orange"}}/>
    </>
  );
}

export default App;
