import React, { a } from 'react'
import './App.css';
import Contact from '../Contact/Contact';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Cover from '../Cover/Cover';
import Header from '../Header/Header';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Cover />
        <About />
        <Product />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
