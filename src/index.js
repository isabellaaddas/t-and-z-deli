import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Catering from "./pages/Catering";
import Order from "./pages/Order";
import Vendors from "./pages/Vendors";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

        <Route index element={<Home />}/>

        <Route path="about" element={<About />}/>

        <Route path="order" element={<Order />}/>

        <Route path="catering" element={<Catering />}/>

        <Route path="careers" element={<Careers />}/>

        <Route path="vendors" element={<Vendors />}/>

        <Route path="contact" element={<Contact />}/>

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);