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
import OwlCarousel from "./components/OwlCarousel";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Bio from "./components/Bio";
import SiteHalf from "./components/SiteHalf";
import Pluto from "./components/Pluto";
import Title from "./components/Title";
import Founders2 from "./components/Founders2";

function App(props) {
  return(
      <div className="site-wrap">
          <BrowserRouter>
              <Menu/>
              <Route exact path="/" render={()=>{
                  return <div>
                      <Products/>
                      <About/>
                      <ContactUsLine/>
                  </div>
              }}/>
              <Route path="/mercury" render={()=>{
                  return <div>
                      <OwlCarousel/>
                      <Title h2="Меркурий"/>
                      <Founders/>
                      <Reviews/>
                  </div>
              }}/>
              <Route path="/venus" render={()=>{
                  return <div>
                      <SiteHalf/>
                  </div>
              }}/>
              <Route path="/earth" render={()=>{
                  return <div>
                      <Title h2="Земля"/>
                      <Founders2/>
                  </div>
              }}/>
              <Route path="/mars" render={()=>{
                  return <div>
                      <Title h2="Марс"/>
                  </div>
              }}/>
              <Route path="/jupiter" render={()=>{
                  return <div>
                      <Title h2="Юпитер"/>
                  </div>
              }}/>
              <Route path="/saturn" render={()=>{
                  return <div>
                      <Title h2="Сатурн"/>
                  </div>
              }}/>
              <Route path="/uranus" render={()=>{
                  return <div>
                      <Title h2="Уран"/>
                  </div>
              }}/>
              <Route path="/neptune" render={()=>{
                  return <div>
                      <Title h2="Нептун"/>
                  </div>
              }}/>
              <Route path="/pluto" render={()=>{
                  return <div>
                      <Title h2="Плутон"/>
                      <Pluto/>
                  </div>
              }}/>
              <Route path="/questions" render={()=>{
                return <div>
                      <Caption h1="Космонавт Сергей Рязанский" h2="Герой России"/>
                      <Services/>
                      <ContactUsLine/>
                </div>
          }}/>
              <Route path="/blog" render={()=>{
                  return <div>
                      <Caption h1="Космонавт Олег Артемьев" h2="Герой России"/>
                      <Bio/>
                      <Blog getArticles={props.getArticles}/>
                  </div>
              }}/>
              <Route path="/contact" render={()=>{
                  return <div>
                      <Caption h1="Связаться с нами" h2="Задать вопрос"/>
                      <ContactUs/>
                  </div>
              }}/>
              <Footer/>
          </BrowserRouter>
      </div>
  );
}

export default App;
