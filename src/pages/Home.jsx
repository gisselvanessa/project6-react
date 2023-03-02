import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import { getAllProductsThunk, getProductsByName } from '../store/slices/products.slice';
import './styles/home.css'
const Home = () => {
    const {products}=useSelector(state=>state)
    // console.log(products);
    const [inputValue, setInputValue] = useState()
    const [categories, setCategories] = useState()

    //filter
    const [fromTo, setFromTo] = useState({
        from:0,
        to:Infinity
    })
    const filterProduct = (prod) =>
        +prod.price >= fromTo.from && +prod.price <= fromTo.to;
    
    
    
        const dispatch=useDispatch()
    const handleSubmit=e=>{
        e.preventDefault()
        const input =e.target.inputSearch.value.trim().toLowerCase()
        dispatch(getProductsByName(input));
    }
    useEffect(() => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories";
        axios.get(url)
            .then(res=>setCategories(res.data))
            .catch(err=>console.log(err))

    }, [])
    // console.log(categories);
    const handleCategory=(id)=>{
        dispatch(getProductsByName(id,true));
        
    }
    const handleCategoryAll=()=>{
        dispatch(getAllProductsThunk())
    }

    const handleSubmitPrice=e=>{
        e.preventDefault()
        const from=Number(e.target.from.value.trim())
        const to=Number(e.target.to.value.trim())

        if(from&& to){
            setFromTo({from,to})
        }else if (from&& !to) {
            setFromTo({from,to:Infinity})
        }
        else if (!from&& to) {
            setFromTo({from:0,to})
        }
        else{
            setFromTo({from:0,to:Infinity})
        }
    }
    // console.log(inputValue);
    return (
        <div className="home">
            <div>
                <div className="home__cat">
                    <header className="side">
                        <h3>Price</h3>
                        <i className="bx bx-chevron-down"></i>
                    </header>
                    <form
                        className="home__form-fromto"
                        onSubmit={handleSubmitPrice}
                    >
                        <div className="home__fromto">
                            <label className='home__fromto-label' htmlFor="from">From</label>
                            <input
                                className="home__input-fromto"
                                type="number"
                                id="from"
                            />
                        </div>
                        <div className="home__fromto">
                            <label className='home__fromto-label' htmlFor="to">To</label>
                            <input
                                className="home__input-fromto"
                                type="number"
                                id="to"
                            />
                        </div>
                        <button className="filter__btn">Filter price</button>
                    </form>
                </div>
                <div className="home__cat">
                    <header className="side">
                        <h3>Category</h3>
                        <i className="bx bx-chevron-down"></i>
                    </header>
                    <ul className="home__categories">
                        <li
                            className="home__categories-label"
                            onClick={handleCategoryAll}
                        >
                            All
                        </li>
                        {categories?.map((categorie) => (
                            <li
                                className="home__categories-label"
                                onClick={() => handleCategory(categorie.id)}
                                key={categorie.id}
                            >
                                {categorie.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <form className="home__form" onSubmit={handleSubmit}>
                    <input
                        className="home__input"
                        type="text"
                        name=""
                        id="inputSearch"
                        placeholder="What are you looking for?"
                    />
                    <button className="home__btn">
                        <i className="bx bx-search-alt-2"></i>
                    </button>
                </form>

                <div className="cards">
                    {products === null ? (
                        <h1 className="home__load">Loading...</h1>
                    ) : products?.length === 0 ? (
                        <h1 className="home__error">
                            ❌This product does not exist❌
                        </h1>
                    ) : (
                        products
                            ?.filter(filterProduct)
                            .map((product) => (
                                <CardProduct
                                    key={product.id}
                                    product={product}
                                />
                            ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home