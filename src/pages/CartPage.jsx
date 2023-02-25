import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartPages/CartItem';

const CartPage = () => {

    const {cart}= useSelector(state=>state)

    // console.log(cart);
    return (
        <div>
            <div>
            {
                cart?.map(prodInfo=>(
                    <CartItem
                        key={prodInfo.id}
                        prodInfo={prodInfo}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default CartPage