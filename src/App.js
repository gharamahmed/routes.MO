import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Product from './pages/product';
import ProductDetailes from './pages/product.details';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      {<Header/>}
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:productId' element={<ProductDetailes/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
