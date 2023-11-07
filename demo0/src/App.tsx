import React from "react";

type Props = {};

export default function App({}: Props) {
  const tmp1 = 0;
  const tmp2: number = 1;
  const tmp3: string = "Lek";
  const tmp4: boolean = false;

  const [count, setCount] = React.useState(0);

  function method1() {
    setCount(count + 1);
    console.log("count: " + count);
  }

  return (
    <div>
      CodeMobiles {tmp1}, {tmp2}, {tmp3}, {tmp4 ? "yes" : "no"}
      <br />
      <button onClick={() => method1()}>Call me {count}</button>
    </div>
  );
}
