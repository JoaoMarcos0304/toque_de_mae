import { useState, ChangeEvent } from 'react';

function Criar_Conta() {

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [senha2, setSenha2] = useState<string>('');

  const nameImput = (event: ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  }

  const emailImput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const senhaImput = (event: ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  }

  const senha2Imput = (event: ChangeEvent<HTMLInputElement>) => {
    setSenha2(event.target.value);
  }
    
  const criar_conta = () => {
    if (senha !== senha2) {
      return alert("As senhas não coincidem, favor verifique-as")
    }
  }

  return (
    <section>
      <div>
        <form action="submit">

          <label htmlFor="nome">Seu Nome</label>
          <input onChange={ nameImput } type="text" name="nome" />

          <label htmlFor="email">Seu e-mail</label>
          <input onChange={ emailImput } type="text" name="email" />

          <label htmlFor="senha">Sua senha</label>
          <input onChange={ senhaImput } type="text" name="senha" />

          <label htmlFor="senha">Confirme sua senha</label>
          <input onChange={ senha2Imput } type="text" name="senha" />

        </form>

          <button onClick={ criar_conta } type="button">Criar</button>
          <button type="button">Logar</button>

      </div>
    </section>
  )
}

export default Criar_Conta