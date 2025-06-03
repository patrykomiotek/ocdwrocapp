import { useState, useCallback, useEffect } from 'react';
import type { MouseEventHandler } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button, Text } from '@/ui';

export function Generator() {
  // let uuid = uuidv4();
  // const state = useState<string>('') // [0 - value, 1 - updateCallback]
  // const state = useState(uuidv4()); // [0 - value, 1 - updateCallback]
  const [uuid, setUuid] = useState<string>(uuidv4());

  useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('uuid:mounted/updated');

    return () => {
      console.log('uuid:unmounted');
    };
  }, [uuid]);

  // 1) no optimization before <= React 18, React 19 works out of the box
  // const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
  // 2) with useCallback
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    // uuid = uuidv4();
    // console.log(uuid);
    // state[1](uuidv4());
    setUuid(uuidv4());
  }, []);

  // const userData = useMemo(() => {
  //   return {id: 2, name: 'abc'}
  // }, []);

  return (
    <>
      {/* <Text>{state[0]}</Text> */}
      <Text>{uuid}</Text>
      <Button onClick={handleClick}>Regenerate</Button>
      {/* <User data={userData} /> */}
      {/* <div onClick={handleClick}>Generate</div> */}
    </>
  );
}
