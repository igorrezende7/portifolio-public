import React from "react";
import '../../styles/cards-home.scss'
import {AiOutlineCheck} from 'react-icons/ai'
const CardHome = () => {





    return (

        <>
        <div  className="vantagens">
            <p>Quais as vantagens em ter seu site desenvolvido por nós?</p>
        </div>
            <div className="cards-grid">
                <div data-anime='left' className="fast-grid">
                    <p> <AiOutlineCheck/>Sites rápidos</p>
                    <p> <AiOutlineCheck/>Navegação simplificada</p>
                    <p> <AiOutlineCheck/>Alto desempenho</p>
                    <p> <AiOutlineCheck/>Tecnologias mais atuais</p>
                </div>

                <div data-anime='left'  className="atendimento">
                    <p> <AiOutlineCheck/>Atendimento 24hrs</p>
                    <p> <AiOutlineCheck/>Comunicação rápida</p>
                    <p> <AiOutlineCheck/>Suporte imediato</p>
                    <p> <AiOutlineCheck/>Total transparência</p>
                </div>

                <div data-anime='right'  className="auto">
                    <p> <AiOutlineCheck/>Site gerenciavel</p>
                    <p> <AiOutlineCheck/>Banco de dados intuitivo</p>
                    <p> <AiOutlineCheck/>Totalmente personalizável</p>
                    <p> <AiOutlineCheck/>Preço justo</p>
                </div>
            </div>
            
            
        </>
    )
}

export default CardHome