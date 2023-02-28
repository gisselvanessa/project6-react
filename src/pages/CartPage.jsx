import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartPages/CartItem';
import { getCartThunk } from '../store/slices/cart.slice';
import config from '../utils/getConfig';
import './styles/cartPage.css'

const CartPage = ({handleClose}) => {
    const [totalPrice, setTotalPrice] = useState(0)

    const {cart}= useSelector(state=>state)

    console.log(cart);
    const dispatch = useDispatch()

    useEffect(() => {
        const result=cart?.reduce((acc,cv)=>acc+cv.quantity*Number(cv.product.price),0)
        setTotalPrice(result)
    }, [cart])

    const handlePurchase=()=>{
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";
        axios.post(url,{}, config)
            .then(res=>{
                console.log(res.data)
                dispatch(getCartThunk())
            })
            .catch(err =>console.log(err.response))

    }
    
    return (
        <div>
            <span onClick={handleClose}>
                <i className="bx bx-x"></i>
            </span>
            <div className="cart__box">
                <h2 className="cart__title">Shopping cart</h2>
                {cart?.map((prodInfo) => (
                    <CartItem key={prodInfo.id} prodInfo={prodInfo} />
                ))}
                <div className="cart__footer">
                    <h2 className="cart__total">
                        <span>Total: </span>
                        <span>{totalPrice}</span>
                    </h2>
                    <button
                        onClick={handlePurchase}
                        className="cart__btn-check"
                    >
                        Buy this cart
                    </button>
                </div>
            </div>
            {/* <div></div> */}
        </div>
    );
}

export default CartPage