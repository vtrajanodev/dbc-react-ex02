export const Card = ({ listaDeTrabalhadores, excluir }) => {
    return (
        <div>
            <div className="flex">
                    {listaDeTrabalhadores.map(t => (
                        <div className="card">
                            <h3>Usuário: {t.nome}</h3>
                            <p>E-mail: {t.email}</p>
                            <p>Profissão: {t.profissao}</p>
                            <button onClick={() => excluir(t.id)}>Remover</button>
                        </div>
                    ))}
                </div>
        </div>
    );
}