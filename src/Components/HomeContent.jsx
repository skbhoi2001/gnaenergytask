import React, { useEffect } from 'react';
import FilterComponent from './FilterComponent';
import ProductListing from './ProductListing';
import Styles from '../Styles/Home.module.css';
import { fetchProduct } from './ApiOperation/Operation';
import { useGlobalContext } from '../Context/GlobalContext';

const HomeContent = () => {
  const { prodData, allData } = useGlobalContext();

  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.searchComponent}>
        <input className={Styles.inputBox} type='text' />
        <div className={Styles.searchButton}>Search</div>
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
