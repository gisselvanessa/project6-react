import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
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
                        <Link className="navbar__opt" to="/">
                            <i className="bx bx-shopping-bag"></i>
                        </Link>
                    </li>
                    <li className="navbar__options">
                        <Link className="navbar__opt" to="/cart">
                            <i className="bx bxs-cart"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header