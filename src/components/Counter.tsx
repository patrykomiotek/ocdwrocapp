import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((value) => value + 1);
    }, 1000);
    console.log("mount");
    console.log("intervalId: ", { id });

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
    </div>
  );
}
