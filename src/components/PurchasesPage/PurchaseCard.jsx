import React from 'react'
import './styles/purchaseCard.css'

const PurchaseCard = ({purchase}) => {
  return (
      <article className="purchase__card">
          <header className="purchase__header">
              <img
                  className="purchase__img"
                  src={purchase.product.images[1].url}
                  alt=""
              />
          </header>
          <h3 className="purchase__title">{purchase.product.title}</h3>
          <div className="purchase__date">
              {purchase.createdAt.slice(0, 10)}
          </div>
          <div className="purchase__quantity">{purchase.quantity}</div>
          <div className="purchase__price">
              $ {(purchase.product.price * purchase.quantity).toFixed(2)}
          </div>
      </article>
  );
}

export default PurchaseCard