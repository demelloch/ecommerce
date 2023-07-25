import { BrowserRouter, Route, Routes }  from "react-router-dom";
// import { Home } from "../pages/Home";
import { ListarProdutos } from "../componentes/ListarProdutos";
import { Produto } from "../pages/Produto";
export function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Produto />} />
                <Route path="/produto" element={<Produto />} />  
                <Route path="/ListarProdutos" element={<ListarProdutos />} />  
            </Routes>
        </BrowserRouter>
    );
}