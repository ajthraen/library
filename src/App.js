import './index.css'
import React, { useState, useEffect } from "react";
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import { books } from './data'
import BookInfo from './pages/BookInfo'
import Cart from './pages/Cart'
import { counter } from '@fortawesome/fontawesome-svg-core';


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item,
          quantity: +quantity,
        }
      } else {
        return item
      }
    }))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <Router>
      <div className="App">
          <Nav numItems={numItems()}/>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />}/>
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} />}/>
          <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
