import React,{useState} from "react";
import '../../styles/header.scss'
import {Link} from 'react-router-dom'

const Header = () =>{
const [ischecked, setischecked] = useState(false)


function check(){
    setischecked(!ischecked)
    console.log(ischecked)
    const burger = document.getElementById('burger')
    const burger_div = document.getElementById('burger-div')
    if(ischecked){
        burger.style.display ='none'
        burger_div.style.background='transparent'
    }else{
        burger.style.display='block'
        burger_div.style.background='rgb(34, 34, 34)'
    }
}

function scrollDev(){
    const dev = document.getElementById('dev')
    dev.scrollIntoView()
}

function scrollClientes(){
    const clientes = document.getElementById('clientes')
    clientes.scrollIntoView()
}

    return(

        <>
            <section className="header-section">
                <div className="header-list-div">
                    <ul className="header-ul">
                        <Link style={{textDecoration:'none', color:'white'}} to="/"><li style={{borderBottom:'1px solid white'}}>Home</li></Link>
                        <li onClick={scrollDev}>Sobre</li>
                        <Link style={{textDecoration:'none', color:"white"}} to='/contato'><li>Contato</li></Link>
                        <li onClick={scrollClientes}>Clientes</li>
                    </ul>
                    
               
                </div>

            </section>
            <div id="burger-div" className="burger-div">
                    <input value={ischecked}  onClick={check} type='checkbox' id='checkbox'></input>
                    <label htmlFor='checkbox'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                 </div>
                 <div id="burger" className="burger-content">
                    <div className="ul-burger">
                    <ul className="header-ul-burger">
                    <Link style={{textDecoration:'none', color:'white'}} to="/"><li>Home</li></Link>
                        <li onClick={scrollDev}>Sobre</li>
                        <Link style={{textDecoration:'none', color:"white"}} to='/contato'><li>Contato</li></Link>
                        <li onClick={scrollClientes}>Clientes</li>
                    </ul>
                    </div>
                 </div>

         
        </>
    )
}
export default Header