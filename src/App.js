import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <div className="Items">
        <h1>Items</h1> 
        <Item name="Cup" price="350"/>
        <Item name="Studs" price="50"/>
        <Item name="Love" price="100000000000000"/>
        {/* <Item name="Macbook" price="1000"/> */}
      </div>
      <div className='Cart'>
        <h1>Cart</h1>
        <Cart/>
      </div>
    </div>
  );
}

export default App;
