import { useState } from "react";
import Button from 'react-bootstrap/Button';

function ComponenteNome() {

    const [nome, setNome] = useState("SEU NOME");

    return (
        <div>

            <button onClick={() => setNome("APELIDO")}>Alterar para apelido</button>
            <button onClick={() => setNome("SEU NOME")}>Alterar para nome</button>

            <p>Nome: {nome}</p>

            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>            
        </div>
    );
}

export { ComponenteNome };