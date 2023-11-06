import React, { useState } from 'react';
import Section from '../../components/section/Section';
import './Posts.css'

function Posts(){

    const [mensagem, setMensagem] = useState('');

    let handleChange = (e) => {
        setMensagem(e.target.value)
    }

    return(
        <div>
            <Section id="3"/>

            <form className='formulario'>
                <div>
                    <label>Mensagem</label>
                    <input onChange={handleChange}></input>
                </div>
                <div>
                    <button>OK</button>
                </div>
            </form>

            <h2>Sua mensagem</h2>
            <p>{mensagem}</p>
        </div>
    )
}

export default Posts;