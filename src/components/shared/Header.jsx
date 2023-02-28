import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import CartPage from '../../pages/CartPage';
import './styles/header.css'
// import CartPage from  'src/pages/CartPage.jsx'
const Header = () => {
   

const [open, setOpen] = useState(false);
const handleOpen = () => {
    console.log('open');
    setOpen(true)};
const handleClose = () => setOpen(false);

    return (
        <header className="header">
            <h1 className="">
                <Link className="header__title" to="/">
                    e-commerce
                </Link>
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
                        <i onClick={handleOpen} className="bx bxs-cart"></i>
                        
                        <div className={`cart__container ${open && "show-cart"}`}>
                            <CartPage
                                handleClose={handleClose}
                            />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header