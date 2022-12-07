import axios from 'axios';
import { useState, useEffect } from 'react';
import RegisterForm from '../components/RegisterForm';
import Table from '../components/Table';

export default function AdminSection({ type }) {
  // Type: aluno, professor, turma, curso

  const [isCadastrarClicked, setIsCadastrarClicked] = useState(false);
  const cadastroButtonClicked = () => {
    setIsCadastrarClicked(!isCadastrarClicked);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    await axios
      .get('https://backend-server-nuvem.vercel.app/' + type)
      .then((response) => {
        setData(response.data);
        console.log('response.data: ', response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
      
    console.log('data: ', data);
  };

  const renderPage = () => {
    if (isCadastrarClicked) {
      return (
        <RegisterForm
          endpoint={type}
          buttonClick={cadastroButtonClicked}
          getData={getData}
        />
      );
    } else {
      return <Table persons={data} type={type} getData={getData}/>;
    }
  };

  if (type == 'aluno') {
    return (
      <Header
        title="Alunos"
        button="Cadastrar Aluno"
        click={cadastroButtonClicked}
        render={renderPage}
      />
    );
  } else if (type == 'professor') {
    return (
      <Header
        title="Professores"
        button="Cadastrar Professor"
        click={cadastroButtonClicked}
        render={renderPage}
      />
    );
  } else if (type == 'turma') {
    return (
      <Header
        title="Turmas"
        button="Cadastrar Turma"
        click={cadastroButtonClicked}
        render={renderPage}
      />
    );
  }
}

function Header({ title, button, click, render }) {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-start">
      <div className="w-full flex justify-between items-center">
        <div className="text-white font-semibold text-2xl">{title}</div>
        <button
          onClick={click}
          className="bg-white text-blue font-semibold text-lg px-6 py-2 rounded"
        >
          {button}
        </button>
      </div>
      <div className="w-full flex justify-between items-center">{render()}</div>
    </div>
  );
}
