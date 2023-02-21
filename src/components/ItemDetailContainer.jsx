import React from 'react'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from "react";
import Data from "../data.json";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const {id} = useParams();
  console.log(id);

  const lengerieFilter = Data.filter((lengerie) => lengerie.id == id);
  return (
    <>
    <ItemDetail lengeries = {Data}/>
    </>
  )
}

export default ItemDetailContainer
