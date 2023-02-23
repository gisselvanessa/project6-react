import React from 'react'

const ProductInfo = ({product}) => {
  return (
    <article>
        <h3>{product?.brand}</h3>
    </article>
  )
}

export default ProductInfo