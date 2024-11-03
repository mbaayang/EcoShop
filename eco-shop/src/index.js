import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, 
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements, } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Products from './pages/products';
import Home from './pages/home';
import Contact from './pages/contact';
import Card from './pages/card';
import Whishlist from './pages/whishlist';
import ProductDetails from './pages/product-details';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="products" element={<Products />}></Route>
      <Route path="product/:id" element={<ProductDetails />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="card" element={<Card />}></Route>
      <Route path="wishlist" element={<Whishlist />}></Route>
      <Route path="*" element={<h1>404 - Not Found</h1>}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
