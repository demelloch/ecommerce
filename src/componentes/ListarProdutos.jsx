import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../_service/api"
import { CardProduto } from "./CardProduto";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";


function ListarProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => { 
        buscarProdutos();
    }, []);

    async function buscarProdutos() {
        try {
          const response = await api.get("/productlistbyremark/home");
          setProdutos(response.data);
        } catch (error) {
          MensagemDeErro("Erro para buscar os produtos.");
        }
    }

    function MensagemDeErro(mensagem="Mensagem de Erro") {

        toast.error(mensagem, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="../">E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="../">Home</Nav.Link>
                    <Nav.Link href="../ListarProdutos">Produtos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row className="justify-content-md-center">
                <Col md={2}>
                    <h1>ListarProdutos</h1>
                </Col>
            </Row>
            <Row>
            {produtos.map((produto, index) => {
                return (
                    <Col className="m-2" key={index}>
                        <CardProduto
                            id={produto.id}
                            nome={produto.title}
                            preco={produto.price}
                            linkImagem={produto.image}
                            descricao={produto.category}
                         />   
                    </Col>
                );
            })}
            </Row>
        </>
    );
}

export { ListarProdutos };