import React from "react";

type StatusProps = {
  status: "loading"| "success" |"error";
};
// Whats wrong here is that even if send a random string lik e"aaadada" it will
// show error message but that's not the case! to avoid this we use union type

const Status = (props: StatusProps) => {
  let message: string;
//  console.log(props.status);
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else {
    message = "Error in fetching data";
  }

  return <h1>{message}</h1>;
};

export default Status;
