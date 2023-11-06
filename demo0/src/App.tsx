import React from "react";

type Props = {};

export default function App({}: Props) {
  const tmp1 = 0;
  const tmp2: number = 1;
  const tmp3: string = "Lek";
  const tmp4: boolean = false;

  function method1() {
    console.log("Call me why?");
  }

  return (
    <div>
      CodeMobiles {tmp1}, {tmp2}, {tmp3}, {tmp4 ? "yes" : "no"}
      <br />
      <button>Call me</button>
    </div>
  );
}
