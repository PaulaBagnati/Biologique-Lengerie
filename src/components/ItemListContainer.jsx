import React from 'react'
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  const { category } = useParams();

  const catFilter = Data.filter((lengerie) => lengerie.category === category);
  return (
    <div className='container__catalogo'>

      <div>
        <h2>CATALOGO</h2>
      </div>

      <div className='item__catalogue'>
        {category ? <ItemList lengeries={catFilter} /> : <ItemList lengeries={Data} />}
      </div>
      
    </div>
  )
}

export default ItemListContainer
