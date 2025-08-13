import { useEffect, useState } from 'react';
import '../styles/usuarios.css'; 

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((resposta) => resposta.json())
        .then((dados) => setUsuarios(dados));
    }, []); 


    return(
        <div className='usuarios'>
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