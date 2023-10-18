import React from 'react';
import Styles from '../Styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={`colorWhite ${Styles.navbarContainer}`}>
      <div className={Styles.TitleName}>ProdWeb</div>
      <div className={Styles.navCategory}>
        <div>Home</div>
        <div>Category</div>
        <div>Dashboard</div>
        <div>Products</div>
        <div>Pages</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
      <div className={Styles.buttonContainer}>
        <button className={`navButton ${Styles.becomeExpert}`}>
          Become an expert
        </button>
        <button className={`navButton ${Styles.signinButton}`}>
          Sign In / Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
