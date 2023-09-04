import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carregando from '../assets/carregando.gif'

function Verificar() {

  const [role, setRole] = useState<string>('');

  useEffect(() => {
    const dados = localStorage.getItem('toquedemae_perfil');
    if (dados === null) {
      return setRole('naotem');
    }
    const info = JSON.parse(dados)
    
    if (info.role === "admin") {
      return setRole('admin');
    }

    if (info.role === "client") {
      return setRole('client');
    }

  }, []);

  return (
    <section>
      <div>
        <h1>Verificando seu acesso</h1>
        <img src={ Carregando } alt="imagem carregando" />
      </div>

      {
        role === 'naotem' && <Link to="/criarconta">Login</Link>
      }
      {
        role === 'admin' && <Link to="/controle">Acessar</Link>
      }
      {
        role === 'client' && <Link to="/minhaconta">Acessar</Link>
      }
      
    </section>
  )
}

export default Verificar