import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/shared/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { getAllProductsThunk } from './store/slices/products.slice';


function App() {
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
      </Routes>
    </div>
  )
}

export default App
