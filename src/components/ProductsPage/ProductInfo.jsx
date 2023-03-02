import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import SliderImgs from './SliderImgs'
import './styles/productInfo.css'
const ProductInfo = ({product}) => {

    const [counter, setCounter] = useState(1)

    const handleAdd=()=>{
        setCounter(counter+1)
    }

    const handleMinus=()=>{
        if(counter-1 >= 1){
            setCounter(counter - 1);
        }
    }
    const dispatch=useDispatch()
    const handleAddCart=()=>{
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

        const data={
            quantity: counter ,
            productId: product.id
        }
        axios.post(url,data, config)
            .then(res=> {
                console.log(res.data)
                dispatch(getCartThunk())
                setCounter(1)
            })
            .catch(err=>console.log(err.response))

    }
    // console.log(product);
    return (
        <article className="product-info-container">
            {/* <img
                className="product-info__img"
                src={product?.images[0].url}
                alt=""
            /> */}
            <SliderImgs product={product}/>
            <div className='body'>
                <h3 className="product-info__brand">{product?.brand}</h3>
                <h2 className="product-info__title">{product?.title}</h2>
                <div className="product-info__footer">
                    <section className="info">
                        <h4 className="product-info__price">Price</h4>
                        <h3 className="price">{product?.price}</h3>
                    </section>
                    <footer>
                        <section>
                            <h4 className="product-info__quantity">Quantity</h4>
                            <div className="product-info__btns">
                                <div className="btn" onClick={handleMinus}>
                                    -
                                </div>
                                <div className="btn">{counter}</div>
                                <div className="btn" onClick={handleAdd}>
                                    +
                                </div>
                            </div>
                        </section>
                    </footer>
                </div>
                <button onClick={handleAddCart} className="product-info__btn">
                    Add to cart <i className="bx bx-cart"></i>
                </button>
                <p className="product-info__description">
                    {product?.description}
                </p>
            </div>
        </article>
    );
}

export default ProductInfo