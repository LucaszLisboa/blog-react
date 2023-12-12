import React, { useState } from 'react';
import Section from '../../components/section/Section';
import './Cadastro.css';

function Cadastro(){

  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    matricula: '',
    idade: '',
    curso: ''
  });

  function handleSubmit(event){
    event.preventDefault(); 
    let dataAluno =  JSON.stringify(formData);
    cadastrarAluno(dataAluno);
  }

  function cadastrarAluno(dataAluno){
    fetch('http://localhost:3000/aluno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: dataAluno
    })
    .then(response => {
      if(response.ok){
        alert('Aluno cadastrado com sucesso!');
        setFormData({
          nome: '',
          sobrenome: '',
          matricula: '',
          idade: '',
          curso: ''
        });
      }else{
        throw new Error('Erro ao cadastrar aluno');
      }
    })
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return(
    <div className='about'>
      <Section id="2"/>
      <form className='formulario' onSubmit={handleSubmit}>
        <div className="formulario-nome">
          <label>Nome:</label>
          <input type='text' name='nome' placeholder='Nome' value={formData.nome} onChange={handleChange}></input>
        </div>
        <div className="formulario-sobrenome">
          <label>Sobrenome:</label>
          <input type='text' name='sobrenome' placeholder='Sobrenome' value={formData.sobrenome} onChange={handleChange}></input>
        </div>
        <div className="formulario-matricula">
          <label>Matrícula:</label>
          <input type='text' name='matricula' placeholder='Matrícula' value={formData.matricula} onChange={handleChange}></input>
        </div>
        <div className="formulario-idade">
          <label>Idade:</label>
          <input type='text' name='idade' placeholder='Idade' value={formData.idade} onChange={handleChange}></input>
        </div>
        <div className="formulario-curso">
          <label>Curso:</label>
          <input type='text' name='curso' placeholder='Curso' value={formData.curso} onChange={handleChange}></input>
        </div>
        <div className="formulario-button">
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro;