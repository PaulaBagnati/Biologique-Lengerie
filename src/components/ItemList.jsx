import React from 'react'
import Item from "./Item";

const ItemList = ({ lengeries }) => {
  return (
    <>
      {lengeries?.map((lengerie) => (
          <Item
            key={lengerie.id}
            id={lengerie.id}
            name={lengerie.name}
            description={lengerie.description}
            price={lengerie.price}
            stock={lengerie.stock}
            category={lengerie.category}
          />
        ))}
    </>
  )
}

export default ItemList
