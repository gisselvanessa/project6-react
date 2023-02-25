import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/shared/Header';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import ProtectedRoutes from './pages/ProtectedRoutes';
import RegisterPage from './pages/RegisterPage';
import { getCartThunk } from './store/slices/cart.slice';
import { getAllProductsThunk } from './store/slices/products.slice';


function App() {
  // const {cart}= useSelector(state=>state)
  // console.log(cart);
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  return (
      <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path='/user'>
                  <Route path="register" element={<RegisterPage />} />
                  <Route path="login" element={<LoginPage />} />
              </Route>
              <Route element={<ProtectedRoutes/>}>
                <Route  path='/cart' element={<CartPage/>}/>

              </Route>
          </Routes>
      </div>
  );
}

export default App
