import { Container } from "react-bootstrap";
import { CardProduto } from "../componentes/CardProduto";
// import { Produto } from "../pages/Produto";
import img from '../assets/img/SuperMario.jpg'

function Home() {
    return (
        <Container>
            <p>Home</p>
            <hr />
            {/* {Produtos.map((produto, index) => {
                return (
                    <CardProduto
                        nome={produto.nome}
                        preco={produto.preco}
                        linkImagem={produto.linkImagem}
                        descricao={produto.descricao}
                    />
                );
            })} */}
                    <CardProduto
                        nome='Super Mario'
                        preco='500'
                        linkImagem={img}
                        descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    />
        </Container>
    );
}

export { Home };