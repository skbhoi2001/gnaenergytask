import React, { useState } from 'react';
import { useGlobalContext } from '../Context/GlobalContext';
import Styles from '../Styles/ProductListing.module.css';
import TextTruncate from 'react-text-truncate';
import ReactStars from 'react-rating-stars-component';

const itemsPerPage = 5;
let init = 0;

const ProductListing = () => {
  const { prodData,setProdData, allData, filterData, setFilterData } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);

  const [sortData,setSortData] = useState("normal")

  const totalPages = Math.ceil(
    (filterData.length > 0 ? filterData.length : prodData.length) / itemsPerPage
  );

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = (filterData.length > 0 ? filterData : prodData).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.prodBrifList}>
        <div className={Styles.prodList}>
          {prodData?.length} products available
        </div>
        <div className={Styles.sortButton}>Sort</div>
      </div>
      <div className={Styles.prodMainContainer}>
        {paginatedData?.map((ele) => (
          <div className={Styles.prodSection}>
            <div>
              <img className={Styles.prodImage} src={ele?.image} alt='' />
            </div>
            <div className={Styles.prodDesc1}>
              <div className={Styles.prodDetails}>
                <div className={Styles.prodHeadTitle}>{ele?.title}</div>
                <TextTruncate
                  className={Styles.prodDescription}
                  line={6}
                  element='div'
                  truncateText='…'
                  text={ele?.description}
                />
              </div>
              <div className={Styles.prodRatSec}>
                <div className={Styles.starContainer}>
                  <ReactStars
                    size={10}
                    value={ele?.rating?.rate}
                    edit={false}
                  />
                  <div className={Styles.reviewCount}>
                    {ele?.rating?.count} reviews
                  </div>
                </div>
                <div className={Styles.priceSection}>
                  <div>
                    <div className={Styles.priceTag}>Price</div>
                    <div className={Styles.prodPrice}>₹{ele?.price}</div>
                  </div>
                  <div className={Styles.viewButton}>View Details</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={Styles.paginationButtonCont}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleChangePage(index + 1)}
            className={`${Styles.paginationBtn} ${
              currentPage === index + 1 ? Styles.activePage : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
