import './App.css';

// import { ComponenteNome } from './componentes/ComponenteNome'
// import { ComponenteResumoSobreVoce } from './componentes/ComponenteResumoSobreVoce'
// import { ComponenteCompetencia } from './componentes/ComponenteCompetencia';
// import { ComponenteNavBar } from './componentes/ComponenteNavBar';
// import { ListarProdutos } from './componentes/ListarProdutos';
import { RouteApp } from './routes';
import { ToastContainer } from "react-toastify";

function App() {
  return (
          <>
            <RouteApp />
            <ToastContainer />          
          </>
          
    // <div className="App">

    //     <ComponenteNavBar
    //         titulo="Teste 1"
    //     />
    //     <ComponenteNavBar
    //         titulo="Teste 2"
    //     />        

    //     <p>Importando Componentes</p>
    //     <hr />
    //     <ComponenteNome />
    //     <ComponenteResumoSobreVoce>
    //       Sou de Curitiba.
    //     </ComponenteResumoSobreVoce>
    //     <hr />
    //     <p>Lista de Competencias</p>
    //     <ComponenteCompetencia
    //       nome="HTML"
    //       descricao="Fazer pagina static para o curso HTML da Harve"
    //     />
    //     <ComponenteCompetencia
    //       nome="CSS"
    //       descricao="Para formatar o HTML no curso da Harve"
    //     />    
    //     <ListarProdutos>

    //     </ListarProdutos>
    // </div>
  );
}

export default App;
