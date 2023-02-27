import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartPages/CartItem';
import './styles/cartPage.css'

const CartPage = () => {

    const {cart}= useSelector(state=>state)

    // console.log(cart);
    return (
        <div>
            <div className=" cart__container">
                <h2 className='cart__title'>Shopping cart</h2>
                {cart?.map((prodInfo) => (
                    <CartItem key={prodInfo.id} prodInfo={prodInfo} />
                ))}
            </div>
        </div>
    );
}

export default CartPage