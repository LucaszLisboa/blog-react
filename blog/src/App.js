import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Posts from "./pages/posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
