import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartThunk } from '../../store/slices/cart.slice';
import config from '../../utils/getConfig';
import './cardProduct.css'

const CardProduct = ({product}) => {
    
    const navigate= useNavigate()
    const dispatch=useDispatch()
    
    const handleClick=()=>{
        navigate(`/product/${product.id}`)
    }
    const handleBtnClick=(e)=>{
        const url='https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        const data={
            quantity:1,
            productId: product.id
        }
        axios.post(url,data, config)
            .then( res=>{
                console.log(res.data);
                dispatch(getCartThunk());
            })
            .catch(err=>console.log(err.response))

        e.stopPropagation()
    }
    return (
        <article className="product" onClick={handleClick}>
            <header className='product_header'>
                <img
                    className="product__img"
                    src={product.images[0].url}
                    alt=""
                />
            </header>
            <section className='product__section'>
                <header className='product__header'>
                    <h3 className='product__brand'>{product.brand}</h3>
                    <h3 className='product__title'>{product.title}</h3>
                </header>
                <div className='product__footer'>
                    <h3 className='product__price'>Price</h3>
                    <h3 className="price">{product.price}</h3>
                </div>
                <button onClick={handleBtnClick} className='product__cart'>
                    <i className="bx bx-cart"></i>
                </button>
            </section>
        </article>
    );
}

export default CardProduct