import React from 'react'
import './styles/purchaseCard.css'

const PurchaseCard = ({purchase}) => {
  return (
    <article>
        <header>
            <img className='purchase__img' src={purchase.product.images[2].url} alt="" />
        </header>
        <h3>{purchase.product.title}</h3>
        <div>{purchase.quantity}</div>
        <div>{purchase.product.price}</div>
    </article>
  )
}

export default PurchaseCard