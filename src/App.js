import './App.css';
import Header from './components/Header/Header';
import Products from './containers/Products/Products';
import Cart from './containers/Cart/Cart';
import AddBalance from './containers/AddBalance/AddBalance';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    
      <div className="App">
        <Header/>
          <Routes>
            <Route path='/'  element={<Products/>}/>
            <Route path='/cart'  element={<Cart/>}/>
            <Route path='/addbalance' element={<AddBalance/>}/>
          </Routes>
      </div>

  );
}

export default App;
