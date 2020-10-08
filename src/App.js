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

function App(props) {
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
              <Route path="/mercury" render={()=>{
                  return <div>
                      mercury
                  </div>
              }}/>
              <Route path="/venus" render={()=>{
                  return <div>
                      venus
                  </div>
              }}/>
              <Route path="/earth" render={()=>{
                  return <div>
                      earth
                  </div>
              }}/>
              <Route path="/mars" render={()=>{
                  return <div>
                      mars
                  </div>
              }}/>
              <Route path="/jupiter" render={()=>{
                  return <div>
                      jupiter
                  </div>
              }}/>
              <Route path="/saturn" render={()=>{
                  return <div>
                      saturn
                  </div>
              }}/>
              <Route path="/uranus" render={()=>{
                  return <div>
                      uranus
                  </div>
              }}/>
              <Route path="/neptune" render={()=>{
                  return <div>
                      neptune
                  </div>
              }}/>
              <Route path="/pluto" render={()=>{
                  return <div>
                      pluto
                  </div>
              }}/>
              <Route path="/questions" render={()=>{
                return <div>
                      <Caption h1="OUR SERVICES"/>
                      <Services/>
                      <ContactUsLine/>
                </div>
          }}/>
              <Route path="/blog" render={()=>{
                  return <div>
                      <Caption h1="BLOG"/>
                      <Blog getArticles={props.getArticles}/>
                  </div>
              }}/>
              <Route path="/about" render={()=>{
                  return <div>
                      <Caption h1="BLOG"/>
                      <Blog/>
                  </div>
              }}/>
              <Route path="/contact" render={()=>{
                  return <div>
                      <Caption h1="contact"/>
                      <Blog/>
                  </div>
              }}/>
              <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
