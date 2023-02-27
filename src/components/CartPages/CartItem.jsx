import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { getCartThunk } from '../../store/slices/cart.slice';
import config from '../../utils/getConfig';
import './styles/cartItem.css'
const CartItem = ({prodInfo}) => {

    const dispatch=useDispatch()

    const handleDelete=()=>{
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`;
        axios.delete(url, config)
            .then(res=>{
                console.log(res.data)
                dispatch(getCartThunk());
            })
            .catch(err=> console.log(err.response))
            
    }

    return (
        <article className="cart">
            <div className="cart__header">
                <img
                    className="cart__image"
                    src={prodInfo.product.images[0].url}
                    alt=""
                />
            </div>
            <div className="cart__description">
                <h4 className="cart__brand">{prodInfo.product.brand}</h4>
                <h3 className="cart__subtitle">{prodInfo.product.title}</h3>
                <ul className="cart__values">
                    <li className="cart__info">
                        <span className="cart__data">Unit price: </span>
                        <span className="cart__price">
                            ${prodInfo.product.price}
                        </span>
                    </li>
                    <li className="cart__info">
                        <span className="cart__data">Quantity: </span>
                        <span className="cart__quantity">
                            {prodInfo.quantity}
                        </span>
                    </li>
                </ul>
            </div>
            <button className="cart__btn" onClick={handleDelete}>
                <i className="bx bx-plus"></i>
                <i className="bx bx-minus"></i>
                <i className="bx bx-trash"></i>
            </button>
        </article>
    );
}

export default CartItem