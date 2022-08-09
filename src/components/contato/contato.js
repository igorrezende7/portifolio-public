import React,{useState} from 'react';
import '../../styles/contato.scss'
import Header from '../header/header'
import ClienteService from '../services/clientes';
import joia from '../../assets/joia.jpg'
const Contato =() =>{

const [name, setname] = useState()
const[email, setemail] = useState()
const [telephone, settelephone] = useState()
const [comments, setcomments] = useState()
const [ison, setison] = useState(true)



function showBack(){
    setTimeout(function(){
        const load = document.getElementById('loading')
        const enviado = document.getElementById('enviado')
        enviado.style.display='block'
        load.style.display='none'
    },3000)
}

    async function handleSubmit(e){
        e.preventDefault();
        setison(false)
        showBack()
        try {
            const send = await ClienteService.Send({name:name, email:email, telephone:telephone, comments:comments})
        } catch (error) {
            console.log(error)
        }

    }



    return (


        <>
         
        <section className='back-contato'>
        <div className='animate-header'><Header/></div>
        </section>
      
        <section className='section-contato'>
            <div className='div-contato'>
                <p className='title-form'>Entre em contato</p>
                <div className='align-form'>
                <form onSubmit={handleSubmit} className={`${ison ? 'form-contato' : 'none'}`}>
                    <label htmlFor='name'>Nome*</label>
                    <input required placeholder='Nome Completo' type='text' id='name'
                        value={name}
                        onChange={e=>setname(e.target.value)}
                    ></input>
                    <label  htmlFor='email'>Email*</label>
                    <input required placeholder='exemplo@dominio.com' type='email' id='email'
                    value={email}
                    onChange={e => setemail(e.target.value)}
                    ></input>
                    <label htmlFor='telefone'>Telefone*</label>
                    <input required placeholder='(11)9999-9999' type='text' id='telefone'
                    value={telephone}
                    onChange={e => settelephone(e.target.value)}
                    ></input>
                    <label htmlFor='area'>Comentários</label>
                    <textarea required value={comments}
                        onChange={e=>setcomments(e.target.value)}
                    id='area'></textarea>
                    <div className='align-btn'><button type='submit' className='form-btn'>Enviar</button></div>
                </form>
                <div id='loading' className={`${ison ? 'none':'loading'}`}>
                    <div className='charging'></div>
                </div>
                <div id='enviado' className='enviado'>
                    <img className='img-enviado' src={joia}></img>
                    <p>Agradecemos pelo seu contato</p>
                    <p>Em breve responderemos!</p>
                    <a href='/'>Voltar ao menu inicial</a>
                </div>
                </div>
                
            </div>

        </section>
        </>
    )
}

export default Contato