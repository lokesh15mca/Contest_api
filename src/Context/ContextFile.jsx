import { createContext, useState } from "react";
export const ContextFile = createContext();

export const AppCnotextProvider = ({ children }) => {
  const [state, setState] = useState(0);
  const handelChange = (item) => {
    setState(item);
  };
  return (
    <>
      <ContextFile.Provider value={{ state, handelChange }}>
        {children}
      </ContextFile.Provider>
    </>
  );
};
