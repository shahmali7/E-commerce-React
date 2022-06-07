import Header from "./components/Header";

import {Route,Routes} from 'react-router-dom'
import ProductList from "./components/ProductsList";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Card from "./components/Card";


import 'font-awesome/css/font-awesome.min.css'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="Login" element ={<Login/>}/>
      <Route path="Card" element ={<Card/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
