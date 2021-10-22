import { createContext, useState } from "react";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    data: [],
  });
  return (
    <PokeContext.Provider value={[state, setState]}>
      {children}
    </PokeContext.Provider>
  );
};
