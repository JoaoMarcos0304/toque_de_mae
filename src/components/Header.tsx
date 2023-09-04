import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div></div>

      <div>
        <h1>Toque de Mãe</h1>
        <p>Matrizes</p>
      </div>
      
      <div>
        <Link to="/sobremim">Sobre Mim</Link>
        <Link to="/contato">Contatos</Link>
        <Link to="/produtos">Nossos Produtos</Link>
        <Link to="/verificar">Minha Conta</Link>
      </div>
    </header>
  )
}

export default Header