import React from 'react'
import sophie from "../assets/sophie.jpg";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = ({lengeries}) => {
  const { id } = useParams();
  
  const lengerieFilter = lengeries.filter((lengerie) => lengerie.id == id);
  return (
    <>
      {lengerieFilter.map ((lengerie) => (
        <div key={lengerie.id}>
          <section className='content__details'>
            <div className='card__details'>
              
              <div><img src={sophie} alt="bralette" /></div>
              <div className='card__name'>{lengerie.name}</div>
              <div className='card__description'>{lengerie.description}</div>
              <div className='card__category'>Categoria: {lengerie.category}</div>
              <div className='card__stock'>Stock: {lengerie.stock}</div>
              <div className='card__price'>Precio: ${lengerie.price}</div>

            </div>

            <div className='content__btn-detalis'>
                <button>-</button>
                <p>Agregar al carrito</p>
                <button>+</button>
            </div>

          </section>
        </div>
      ))}
    </>
  )
}

export default ItemDetail
