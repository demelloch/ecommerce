import { useEffect } from "react";

function ComponenteResumoSobreVoce(props) {

    // useEffect(()=>{
    //     alert('Olá, esse é um resumo sobre mim')
    // },{});
    

    return (
        <div>
            <div>Resumo</div>
            <p>{props.children}</p>
        </div>
    );
}

export { ComponenteResumoSobreVoce };