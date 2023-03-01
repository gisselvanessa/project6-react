import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import CartPage from '../../pages/CartPage';
import { getAllProductsThunk } from '../../store/slices/products.slice';
import './styles/header.css'
// import CartPage from  'src/pages/CartPage.jsx'
const Header = () => {
   const dispatch=useDispatch()

const [open, setOpen] = useState(false);
const handleOpen = () => {
    console.log('open');
    setOpen(true)};
const handleClose = () => setOpen(false);
const handleCategoryAll=()=>{
        dispatch(getAllProductsThunk())
    }

    return (
        <header className="header">
            <h1 onClick={handleCategoryAll} className="header__title">
                e-commerce
            </h1>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__options">
                        <Link className="navbar__opt" to="/user/login">
                            <i className="bx bx-user"></i>
                        </Link>
                    </li>
                    <li className="navbar__options">
                        <Link className="navbar__opt" to="/purchases">
                            <i className="bx bx-shopping-bag"></i>
                        </Link>
                    </li>
                    <li className="navbar__options-cart">
                        <i
                            onClick={open ? handleClose : handleOpen}
                            className="bx bx-cart-alt"
                        ></i>

                        <div
                            className={`cart__container ${open && "show-cart"}`}
                        >
                            <CartPage handleClose={handleClose} />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header