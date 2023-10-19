import React, { useEffect, useState } from 'react';
import FilterComponent from './FilterComponent';
import ProductListing from './ProductListing';
import Styles from '../Styles/Home.module.css';
import { useGlobalContext } from '../Context/GlobalContext';

const HomeContent = () => {
  const { prodData, setProdData, filterData, setFilterData } =
    useGlobalContext();
  const [serach, setSearch] = useState('');

  const handleSearch = () => {
    let searchData = (filterData.length > 0 ? filterData : prodData)?.filter(
      (data) => data.title.toLowerCase().includes(serach.toLowerCase())
    );
    if (filterData.length > 0) {
      setFilterData(searchData);
    } else {
      setProdData(searchData);
    }
  };

  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.searchComponent}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className={Styles.inputBox}
          type='text'
        />
        <div className={Styles.searchButton} onClick={handleSearch}>
          Search
        </div>
      </div>
      <div className={Styles.filterProdComponent}>
        <div className={Styles.filterComp}>
          <FilterComponent />
        </div>
        <div className={Styles.prodComp}>
          <ProductListing />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
