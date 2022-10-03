import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbar/navbar'
import Home from './components/home/home'
import ShoeData from './components/shoeData/shoeData';
import FemaleShoes from './components/female/female';
import MensShoes from './components/Mens/Mens';
import KidsShoe from './components/kids/kids';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from './store/store';
import { Provider } from 'react-redux'
import AddCarts from './components/Cart/Cart';
import ShoeDetail from './components/shoeDetail/shoeDetail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={Store}>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shoes' element={<ShoeData />} />
            <Route path='/mens' element={<MensShoes />} />
            <Route path='/female' element={<FemaleShoes />} />
            <Route path='/kids' element={<KidsShoe />} />
            <Route path='/cart' element={<AddCarts />} />
            <Route path='/shoedetail/:id' element={<ShoeDetail />} />
          </Routes>
        </Provider>
      </BrowserRouter>
      <ToastContainer/>



    </div>
  );
}

export default App;
