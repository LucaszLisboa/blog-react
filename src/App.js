import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Alunos from "./pages/alunos/Alunos";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/alunos" element={<Alunos /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
