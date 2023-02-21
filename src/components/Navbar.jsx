import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
  <div className='navbar'> 
    <div className='brand'>
    <Link to={"/"}>
      <img src="../src/assets/logo.jpg" alt="LOGO" />
    </Link>
    </div> 
    <div className='itemList'>
      <ul>
        <Link to={"/catalogo"}><li>CATALOGO</li></Link>
        <Link to={`/category/${"Soutien"}`}><li>Soutiens</li></Link>
        <Link to={`/category/${"Vedettina"}`}><li>Vedettinas</li></Link>
        <Link to={`/category/${"Less"}`}><li>Less</li></Link>
      </ul>
    </div> 

    <div>
      <Link to={"/Cart"}><CartWidget/></Link>
    </div>
  </div>
  );
};

export default Navbar;
