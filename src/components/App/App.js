import { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from '../Main-page/MainPage';
import CoffePage from '../Coffe-page/CoffePage';
import GoodsPage from '../Goods-page/GoodsPage';
import Footer from '../Main-page/Footer/Footer';

class App extends Component {
  
  
  render() {
    return (
      <Router>
        <Adaptive />
        <div className="App">
          <Routes>
            <Route path="/coffee-shop" element={<MainPage />} />
            <Route path="/coffepage" element={<CoffePage />} />
            <Route path="/goodspage" element={<GoodsPage />} />
          </Routes> 
          <Footer />
        </div>
      </Router>
    );
  }
}

const Adaptive = () => {
  return (
    <div className='adaptive'>
      <div className='died-logo'></div>
      <br />
      <span>Not working for now  </span>
    </div>
  );
}

export default App;
