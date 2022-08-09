import React from "react";
import '../../styles/footer.scss'
import {FaReact} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {DiSass} from 'react-icons/di'
import {SiNodedotjs} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {AiOutlineMail} from 'react-icons/ai'
import{FaWhatsapp} from 'react-icons/fa'
const Footer = ()=>{

    return(
        <>
        <section className="section-footer">
            <div className="footer-grid">
                <div className="icons-footer-div">
                    <p>Esse Site foi desenvolvido com base nas tecnologias:</p>
                    <div data-animation='left' className="animate div-icons">
                <ul className="ul-icons">
                    <li><FaReact/></li>
                    <li><DiJavascript/></li>
                    <li><DiSass/></li>
                    <li><SiNodedotjs/></li>
                    <li><SiMongodb/></li>
                </ul>
            </div>
                </div>
                <div className="contato-footer">
                    <div className="contato-flex">
                        <ul className="ul-contato">
                            <li><AiOutlineMail/> igorrezende@solucoesdevs.com</li>
                            <li><FaWhatsapp/> +55(11) 97603-0922</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Footer