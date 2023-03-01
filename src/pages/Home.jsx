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
    // console.log(inputValue);
    return (
        <div className="home">
            <div className='home__cat'>
                <header className='side'>
                    <h3>Category</h3>
                    <i className="bx bx-chevron-down"></i>
                </header>
                <ul className='home__categories'>
                    {/* <li onClick={handleCategoryAll}>All</li> */}
                    {categories?.map((categorie) => (
                        <li className='home__categories-label'
                            onClick={() => handleCategory(categorie.id)}
                            key={categorie.id}
                        >
                            {categorie.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <form className="home__form" onSubmit={handleSubmit}>
                    <input
                        className="home__input"
                        type="text"
                        name=""
                        id="inputSearch"
                        placeholder='What are you looking for?'
                    />
                    <button className="home__btn">
                        <i className="bx bx-search-alt-2"></i>
                    </button>
                </form>

                <div className="cards">
                    {products?.length === 0 || products === null ? (
                        <h1>❌This product does not exist❌</h1>
                    ) : (
                        products?.map((product) => (
                            <CardProduct key={product.id} product={product} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home