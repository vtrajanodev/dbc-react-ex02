import { useState } from 'react';
import { Card } from '../Card/Card';
import './Form.modules.css';

export const Form = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [profissao, setProfissao] = useState('')
    const [listaDeTrabalhadores, setListaDeTrabalhadores] = useState([])

    const cadastraTrabalhador = (e) => {
        console.log(listaDeTrabalhadores)
        e.preventDefault();

        if (nome === '' || email === '' || profissao === '') {
            alert('Por favor não deixe nenhum campo vazio no cadastro.')
            return false
        }
        
        setListaDeTrabalhadores([...listaDeTrabalhadores, {
            id: listaDeTrabalhadores.length + 1,
            nome: nome,
            email: email,
            profissao: profissao
        }])
    }

    const removeUsuario = (id) => {
        const trabalhadorRemovido = listaDeTrabalhadores.filter(t => t.id !== id)
        setListaDeTrabalhadores(trabalhadorRemovido)
    }

    return (
        <>
            <div className="container">
                <h2>Cadastro de trabalhadores</h2>
                <form onSubmit={cadastraTrabalhador}>
                    <div>
                        <input
                            type="text"
                            placeholder="Digite o nome completo"
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Digite o email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Digite sua profissão"
                            onChange={(e) => setProfissao(e.target.value)}
                        />
                    </div>
                    <button type="submit">Cadastrar trabalhador</button>
                </form>

                {listaDeTrabalhadores.length > 0 && (<h2>Trabalhadores cadastrados</h2>)}

                <Card listaDeTrabalhadores={listaDeTrabalhadores} excluir={removeUsuario} />
            </div>
        </>
    );
}