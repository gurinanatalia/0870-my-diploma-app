import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";
import Products from "./components/Products";
import About from "./components/About";
import Founders from "./components/Founders";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ContactUsLine from "./components/ContactUsLine";
import {BrowserRouter,Route} from "react-router-dom";
import Caption from "./components/Caption";
import Services from "./components/Services";
import Blog from "./components/Blog";

function App() {
  return(
      <div className="site-wrap">
          <BrowserRouter>
              <Menu/>
              <Route exact path="/" render={()=>{
                  return <div>
                      <Products/>
                      <About/>
                      <Founders/>
                      <Reviews/>
                      <ContactUsLine/>
                  </div>
              }}/>
              <Route path="/services" render={()=>{
                return <div>
                      <Caption h1="OUR SERVICES"/>
                      <Services/>
                      <ContactUsLine/>
                </div>
          }}/>
              <Route path="/blog" render={()=>{
                  return <div>
                      <Caption h1="BLOG"/>
                      <Blog/>
                  </div>
              }}/>
              <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
