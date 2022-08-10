import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../styles/dev.scss'
import img from '../../assets/me.jpg'

const Dev=()=>{


    return (

        <>
        <section className='section-presentation'>
            <div className='grid-presentation'>
                <div data-anime='left' className='presentation-text'>
                    <p className='presentation-title'>Conheça nosso desenvolvedor</p>
                </div>

                <div id='dev' data-anime='right' className='presentation-card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className='img-card' variant="top" src={img} />
                            <Card.Body>
                                <Card.Title className='title-text-card'>Igor Rezende</Card.Title>
                                <Card.Text className='text-card'>
                                   FullStack Developer<br/>
                                    Formado nos cursos OneBitCode e Danki code.<br/>
                                    Cursando Engenharia da computação<br/>
                                    <a target='blank' href='https://github.com/igorrezende7' style={{cursor:'pointer', color:'lightblue'}}>github.com/igorrezende7</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </div>
            </div>
        </section>
        </>
    )
}

export default Dev