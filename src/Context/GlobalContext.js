import React, { useContext, useEffect, useState } from 'react';
import { fetchProduct } from '../Components/ApiOperation/Operation';

const GlobalContext = React.createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default function GlobalContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [prodData, setProdData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await fetchProduct();
    setProdData(res?.data);
    setAllData(res?.data);
  };

  const value = {
    loading,
    setLoading,
    prodData,
    setProdData,
    allData,
    setAllData,
    filterData,
    setFilterData,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
