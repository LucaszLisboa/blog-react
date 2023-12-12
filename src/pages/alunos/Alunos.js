import React, { useEffect, useState } from 'react';
import Section from '../../components/section/Section';
import { DataGrid } from '@material-ui/data-grid';
import './Alunos.css'

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 150,
      editable: true,
    },
    {
      field: 'sobrenome',
      headerName: 'Sobrenome',
      width: 150,
      editable: true,
    },
    {
      field: 'matricula',
      headerName: 'Matrícula',
      width: 150,
      editable: true,
    },
    {
      field: 'idade',
      headerName: 'Idade',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
      field: 'nomeCompleto',
      headerName: 'Nome Completo',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 180,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'nome') || ''} ${
          params.getValue(params.id, 'sobrenome') || ''
        }`,
    },
    {
      field: 'curso',
      headerName: 'Curso',
      width: 180,
      editable: true,
    }
  ];


function Alunos(){

    const [rows, setRows] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState(false);

    useEffect(() => {
        requestAlunos();
        if(mensagem.length > 6){
            requestAluno();
        }
    }, [mensagem])

    let requestAlunos = () => {
        let URL = 'http://localhost:3000/alunos'
        fetch(URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error('Erro ao buscar dados');
        }
        })
        .then(data => {
            setRows(data);
            setErro(false);
        })
        .catch(error => {
            setErro(true)
        });
    }

    let requestAluno = () => {
        let URL = 'http://localhost:3000/aluno/' + mensagem
        fetch(URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        })
        .then(response => {
            if(response.ok)
                return response.json();
            throw response;
        })
        .then(data => {
            setRows([data]);
            setErro(false);
        })
        .catch(error => {
            setErro(true)

        });
    }
    

    let handleChange = (e) => {
        setMensagem(e.target.value)
    }

    let handleError = () => {
        return erro ? "Matrícula não encontrada" : ""
    }

    return(
        <div className='alunos'>
            <Section id="3"/>
            <div className='search'>
                <label>Buscar por Matrícula:</label>
                <input onChange={handleChange}></input>
                <label className='error'>{handleError()}</label>
            </div>
            <div className='tabela' style={{ height: 400}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}

export default Alunos;