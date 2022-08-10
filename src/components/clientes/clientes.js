import React,{useState, useRef} from 'react'
import espaco from '../../assets/espaco.PNG'
import seta from '../../assets/seta.png'
import proprio from '../../assets/proprio.PNG'
import rocket from '../../assets/rocket.PNG'
import '../../styles/clientes.scss'
const Clientes = () =>{

        const carousel = useRef(null)
        
      
        const handleLeftClick = (e) =>{
            e.preventDefault();
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
        }
    
        const handleRightClick = (e) =>{
            e.preventDefault();
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
      


    return(

        <>
        <section data-anime='left' className='title-clientes'>
            <div className='div-clientes'>
                <p className='p-clientes'>Clientes</p>
            </div>
        </section>
        <section data-anime='right' className='carousel-section'>
            <div  className='carousel-container'>
                <div id='clientes' className='carousel' ref={carousel}>
                    <div  className='carousel-card'>
                        <div className='carousel-img'>
                            <img src={espaco}/>
                        </div>
                        <div className='carousel-info'>
                            <span className='carousel-title'>Espaço Conectar</span>
                            <p className='carousel-subtitle'>Site de cursos de estética</p>
                            <p className='carousel-subtitle'>Status:Finalizado</p>
                            <a target='blank' href='http://cursosconectar.com.br/'><button className='btn'>Veja mais</button></a>
                        </div>
                    </div>

                    <div  className='carousel-card'>
                        <div className='carousel-img'>
                            <img src={proprio}/>
                        </div>
                        <div className='carousel-info'>
                            <span className='carousel-title'>Soluções Dev</span>
                            <p className='carousel-subtitle'>Site para portifólio e captação de clientes</p>
                            <p className='carousel-subtitle'>Status:Finalizado</p>
                            <a target='blank' href='#'><button className='btn'>Veja mais</button></a>
                        </div>
                    </div>

                    <div  className='carousel-card'>
                        <div className='carousel-img'>
                            <img src={rocket}/>
                        </div>
                        <div className='carousel-info'>
                            <span className='carousel-title'>Rocket Trail</span>
                            <p className='carousel-subtitle'>Site de produtos industriais e marítimos</p>
                            <p className='carousel-subtitle'>Status:Em construção</p>
                            <a target='blank' href='#'><button className='btn'>Veja mais</button></a>
                        </div>
                    </div>

                  

                
                </div>

            </div>
            <div data-anime='right' id='btn' className='buttons'>
                <button onClick={handleLeftClick}><img className="left" src={seta} /></button>
                <button onClick={handleRightClick}><img className="right" src={seta} /></button>
            </div>
        </section>
        </>
        
    )
}

export default Clientes