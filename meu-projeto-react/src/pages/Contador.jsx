import { useState } from 'react';
import '../styles/contador.css';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div className='contador'>
            <div>
                <p>Valor atual: {contador}</p>
                <button onClick={() => setContador(contador + 1)}>Aumentar</button>
                <button onClick={() => setContador(contador - 1)}>Diminuir</button>
            </div>        
        </div>
    );
}

export default Contador;