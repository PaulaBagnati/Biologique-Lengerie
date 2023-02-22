import React from 'react'
import sophie from "../assets/sophie.jpg";
import { Link } from "react-router-dom";
const Item = ({ id, name, stock, category }) => {
  return (
    <div>
      <div key={id}>
        <section className='content__card'>
          <div className='card'>
            <div><img src={sophie} alt="bralette" /></div>
            <div className='card__name'>{name}</div>
            <div className='card__category'>{category}</div>
            <div className='card__stock'>Stock: {stock}</div>
            <div className='card__btn'> 
              <button>
                <Link to={`/item/${id}`}>Detalles</Link>
              </button>
            </div>            
          </div>
        </section>
      </div>
    </div>
  )
}

export default Item
