

import Greet from './components/Greet'
import Person from './components/person'
import PersonList from './components/PersonList';

function App() {
 const name={
  first:"harsha",
  last:"vardhan"
 }

 const names=[
  {
    first:"harsha",
    last:"vardhan"
  },
  {
    first:"aaa",
    last:"bbb"
  },
  {
    first:"ccc",
    last:"ddd"
  }
 ]
  return (
    <>
      <Greet name='harsha' messageCnt={12} isLoggedIn={false}/>
      <Person name={name}/>
      <PersonList names={names}/>
       
    </>
  );
}

export default App
