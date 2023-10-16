import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default function GlobalContextProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const value = {
    loading,
    setLoading,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
