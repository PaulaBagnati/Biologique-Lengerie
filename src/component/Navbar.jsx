import React from 'react'
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
  <div className='navbar'> 
    <div className='brand'>
      <h1>Biologique Lengerie</h1>
    </div> 
    <div className='itemList'>
      <ul>
          <li><a href="#">Corpiños</a></li>
          <li><a href="#">Vedettinas</a></li>
          <li><a href="#">Less</a></li>
      </ul>
    </div> 

    <div>
      <CartWidget/>
    </div>
</div>
  );
};

export default Navbar;
