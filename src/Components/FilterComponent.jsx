import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context/GlobalContext';
import Styles from '../Styles/Filter.module.css';

const category = [
  "men's clothing",
  'jewelery',
  'electronics',
  "women's clothing",
];

const FilterComponent = () => {
  const { prodData, allData, filterData, setFilterData } = useGlobalContext();
  const [selected, setSelected] = useState([]);
  // console.debug('selected', selected);

  const handleClick = (ele) => {
    setSelected((prev) => [...prev, ele]);

    if (selected.includes(ele)) {
      let t1 = selected.indexOf(ele);
      let selData = selected.filter((elem) => elem !== ele);
      setSelected(selData);

      let data = filterData.filter((elem) => elem.category !== ele);
      setFilterData(data);
      return;
    }

    let data = prodData.filter((elem) => elem.category === ele);

    setFilterData((prev) => [...prev, ...data]);
  };

  return (
    <div>
      <div>
        <div>Category Type</div>
        <div className={Styles.categorySection}>
          {category?.map((ele) => (
            <div
              onClick={() => handleClick(ele)}
              className={Styles.eachClickElem}
            >
              <input type='checkbox' checked={selected.includes(ele)} />
              <div className={Styles.eachEle}>{ele}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='selector'>
          <div className='price-slider'>
            <div
              id='slider-range'
              className='ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content'
            >
              <div className='ui-slider-range ui-corner-all ui-widget-header'></div>
              <span
                tabindex='0'
                className='ui-slider-handle ui-corner-all ui-state-default'
              ></span>
              <span
                tabindex='0'
                className='ui-slider-handle ui-corner-all ui-state-default'
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
