import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../_service/api"
import { CardProduto } from "../componentes/CardProduto";
import Carousel from 'react-bootstrap/Carousel'
// import ExampleCarouselImage from '../components/ExampleCarouselImage';

function Produto() {
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
                <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img 
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x200.png?text=Anuncio+1"
                            alt="First Slide"
                        />
                        <Carousel.Caption>
                        <h3>Primeiro Slide</h3>
                        <p>Turma T9 Harve !!! É nóis !!!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img 
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x200.png?text=Anuncio+2"
                            alt="First Slide"
                        />                        
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img 
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x200.png?text=Anuncio+3"
                            alt="First Slide"
                        />                        
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
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

export { Produto };
