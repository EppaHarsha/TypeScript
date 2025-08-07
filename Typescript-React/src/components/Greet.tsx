type GreetProps = {
  name: string;
  messageCnt: number;
  isLoggedIn: boolean;
};
function Greet(props: GreetProps) {
  // we can do like this also by Destructuring {name}:GreetProps;
  return (
    <>
      {props.isLoggedIn ? (
        <h1>
          Welcome to {props.name}! you have {props.messageCnt} unread msgs
        </h1>
      ) : (
        <h1>Welcome Guest</h1>
      )}

    </>
  );
}

export default Greet;
