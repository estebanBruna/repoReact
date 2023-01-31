import React from 'react'
import carrito from '../images/carrito.png'

function CartWidget () {
    return(
        <>

        <div className='cartContainer'>
            <img src={carrito} alt='carrito' className='cartIcon' />
            <span className='cartCont'>0</span>
        </div>

        </>
    )
}

export default CartWidget