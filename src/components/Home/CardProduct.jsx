import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardProduct = ({product}) => {
    
    const navigate= useNavigate()
    
    const handleClick=()=>{
        navigate(`/product/${product.id}`)
    }
    return (
        <article onClick={handleClick}>
            <header>
                <img src={product.images[0].url} alt="" />
            </header>
            <section>
                <header>
                    <h3>{product.brand}</h3>
                    <h2>{product.title}</h2>
                </header>
                <div>
                    <span>Price</span>
                    <p className='price'>{product.price}</p>
                </div>
                <button>
                    <i className="bx bx-cart"></i>
                </button>
            </section>
        </article>
    );
}

export default CardProduct