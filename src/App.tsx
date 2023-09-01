import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Sobre_Mim from './pages/Sobremim';
import Contato from './pages/Contato';
import Carrinho from './pages/Carrinho';
import Criar_Conta from './pages/Criarconta';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/sobremim" element={ <Sobre_Mim /> } />
      <Route path="/contato" element={ <Contato /> } />
      <Route path="/carrinho" element={ <Carrinho /> } />
      <Route path="/criarconta" element={ <Criar_Conta /> } />
    </Routes>
  )
}

export default App;