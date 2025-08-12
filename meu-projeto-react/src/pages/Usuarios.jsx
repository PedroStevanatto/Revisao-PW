import { useEffect, useState } from 'react';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((resposta) => resposta.json())
        .then((dados) => setUsuarios(dados));
    }, []); 


    return(
        <div>
            <h2>Lista de usuarios</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Usuarios;