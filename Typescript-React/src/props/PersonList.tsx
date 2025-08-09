type name = {
  first: string;
  last: string;
};
type personName = {
  names: name[];
};

function PersonList(props: personName) {
  return (
    <>
      <h1>Person List:</h1>
      {props.names.map((p, index) => (
        <p key={index}>
          {p.first} {p.last}
        </p>
      ))}
    </>
  );
}

export default PersonList;
