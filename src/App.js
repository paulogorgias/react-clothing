import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepages/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

const HatsPage = () => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>

)

function App() {
  return (<div>
   <Route exact path='/' component={HomePage} />
   <Route path='/shop' component={ShopPage} />
    </div>)
}


export default App;
