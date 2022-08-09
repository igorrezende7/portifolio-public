import React, { useState } from "react";
import '../../styles/home.scss'
import img from '../../assets/dev.jpg'
import Header from "../header/header";
import CardHome from "../cards-home/cards-home";
import {FaReact} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {DiSass} from 'react-icons/di'
import {SiNodedotjs} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import Dev from "../dev.js/dev";
import Footer from "../Footer/footer";
import Clientes from "../clientes/clientes";
const Home =() =>{


    
const target = document.querySelectorAll('[data-animation]')
const animationClass = 'animate';

function animationScroll(){
    const target = document.querySelectorAll('[data-animation]')
      const windowTop = window.pageYOffset ;
      target.forEach(function(el){
          if((windowTop) > el.offsetTop ){
              el.classList.remove(animationClass)
          }else{
              el.classList.add(animationClass)
          }
          
      })

  }
  animationScroll()
window.onload = function(){
    animationScroll()
}
  window.addEventListener('scroll', function(){
    animationScroll()
  })
  

    return (
        <>
         <div  data-animation='top' className={` animate dev-div-content`}>
                <Header/>
            </div>
        <section className="dev-section">
            <div className="dev-div-img">
                <img className='dev-div' src={img}/>
            </div>
           
            <div className="relative dev-text">
                <div className="dev-text-div">
                <p data-animation='left'  className={` animate dev-text-p logo `} >
                        <span className="blue">Soluções</span> Dev
                    </p>
                    <p data-animation='right' className={`animate dev-text-p title `} >
                        Desenvolvimento e manutenção de sites e sistemas.
                    </p>
                    <p data-animation='left' className={ `animate dev-text-p subtitle`}>Utilizamos as mais  novas  tecnologias do mercado, trazendo mais auto-performance e eficiência para o seu negócio.</p>
                </div>
            </div>
            <div id="header" data-animation='left' className="animate div-icons">
                <ul className="ul-icons">
                    <li><FaReact/></li>
                    <li><DiJavascript/></li>
                    <li><DiSass/></li>
                    <li><SiNodedotjs/></li>
                    <li><SiMongodb/></li>
                </ul>
            </div>
        </section>




        <section className="cards-section"> 
        
        </section>
        <CardHome/>
        <Clientes/>
        <Dev/>
        <Footer/>
        </>
    )
}
export default Home