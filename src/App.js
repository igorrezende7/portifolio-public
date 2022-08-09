import './App.scss';
import Rotas from './routes';
import React,{useState} from 'react';






function App() {
  
  const animationClass = 'animate'
  
  function animeScroll(){
    const target = document.querySelectorAll('[data-anime]')
      const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
      target.forEach(function(el){
          if((windowTop) > el.offsetTop){
              el.classList.add(animationClass)
          }else{
              el.classList.remove(animationClass)
          }
          
      })
  }

  
animeScroll()

  


  window.addEventListener('scroll', function(){
      animeScroll();
      
  })
  

  return (
    <Rotas/>
  );
}

export default App;
