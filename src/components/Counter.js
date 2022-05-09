import React, { useState, useRef, useEffect } from "react";
import {
  ContainerCounter,
  Display,
  Number,
  ContainerButtons,
  Increase,
  Decrease
} from "./CounterStyle";

function Counter({ number }) {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  function subtractNumber() {
    if (count - parseInt(inputRef.current.value) >= 0)
      setCount(count - parseInt(inputRef.current.value));
  }
  
  useEffect(() => {
    if (number) inputRef.current.value = number;
    else inputRef.current.value = "0";
  }, []);

  return (
    <ContainerCounter>
      <Display>{count}</Display>
      <Number>
        Number:&nbsp;
        <input type="number" name="name" min="0" ref={inputRef} />
      </Number>
      <ContainerButtons>
        <Increase
          onClick={() => setCount(count + parseInt(inputRef.current.value))}
        >
          Increase
        </Increase>
        <Decrease onClick={() => subtractNumber()}>Decrease</Decrease>
      </ContainerButtons>
    </ContainerCounter>
  );
}

export default Counter;