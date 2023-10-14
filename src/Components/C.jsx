import { useContext } from "react";
import { ContextFile } from "../Context/ContextFile";

export const C = () => {
  const { state, handelChange } = useContext(ContextFile);
  const increaseByOne = () => {
    handelChange(state + 1);
  };
  return (
    <>
      <h1>this is c {state}</h1>
      <button onClick={increaseByOne}>Add one</button>
    </>
  );
};
