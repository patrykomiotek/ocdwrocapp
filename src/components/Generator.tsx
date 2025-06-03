import { v4 as uuidv4 } from "uuid";

import { Button, Text } from "../ui";
import type { MouseEventHandler } from "react";

export function Generator() {
  let uuid = uuidv4();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    uuid = uuidv4();
    console.log(uuid);
  };

  return (
    <>
      <Text>{uuid}</Text>
      <Button onClick={handleClick}>Regenerate</Button>
      {/* <div onClick={handleClick}>Generate</div> */}
    </>
  );
}
