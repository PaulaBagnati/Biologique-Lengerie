import React from 'react'

const Cart = () => {
  return (
    <div>
      <section className='container__cart'>
        <form action="#">
          <div>
            <input type="text" name="nombre" id="nombre" placeholder='Ingresa tu nombre' required/>
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder='Ingresa tu email' required/>
          </div>
          <div>
            <button>Enviar</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Cart
