import React, { useState } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import './Home.css'

const Home = () => {
       
    let [produtos, setProdutos] = useState([]);
    
    return (
        <div className="Home"> 
            <Header/>
            <Grid>
                <PageHeader>
                    <h1>DEP Store</h1> 
                    <small><em>Blusas, Camisas, Ténis, Bonés e muito mais!!</em></small>
                </PageHeader>
                <Row className="show-grid">
                    <Col sm={4} className="card">
                        <code>
                            <img src="https://cdn.iset.io/assets/37657/produtos/8932/thumb_400-400-1_mbv21tsh063_c016_5resultado.jpg" alt="CamisaNewEra" width="250"/>
                            <h3>Camisa New Era</h3>
                            <h3>R$ 89,90</h3>
                            <button className="btn btn-primary">Adicionar no Carrinho</button>
                        </code>
                    </Col>
                    <Col sm={4} className="card">
                        <code>
                            <img src="https://cdn.iset.io/assets/37657/produtos/8910/thumb_400-400-dep1466_alt.jpg" alt="CamisaDepHappyHour" width="250"/>
                            <h3>Camisa Dep Happy</h3>
                            <h3><del>R$ 89,90</del> - 69,90</h3>
                            <button className="btn btn-primary">Adicionar no Carrinho</button>
                        </code>
                    </Col>
                    <Col sm={4} className="card">
                        <code>
                            <img src="https://cdn.iset.io/assets/37657/produtos/8967/thumb_400-400-bdep1422_c.jpg" alt="BlusaDepMulherMascarada" width="250"/>
                            <h3>Blusa Dep Mascarada</h3>
                            <h3>R$ 109,90</h3>
                            <button className="btn btn-primary">Adicionar no Carrinho</button>
                        </code>    
                    </Col>
                </Row>    
                <Row className="show-grid2">
                    <Col sm={4} className="card">
                        <code>
                            <img src="https://cdn.iset.io/assets/37657/produtos/8968/thumb_400-400-bdep1417.jpg" alt="BlusaDepFaceLeão" width="250"/>
                            <h3>Blusa Dep Face Leão</h3>
                            <h3>R$ 109,90</h3>
                            <button className="btn btn-primary">Adicionar no Carrinho</button>
                        </code>    
                    </Col>
                    <Col sm={4} className="card">
                        <code>
                            <img src="https://cdn.iset.io/assets/37657/produtos/8900/thumb_400-400-1_nfv21bon020_c002_5resultado.jpg" alt="BonéNewEraSnapbackRaiders" width="250"/>
                            <h3>Boné New Era Raiders</h3>
                            <h3><del>R$ 30,90</del> - 20,90</h3>
                            <button className="btn btn-primary">Adicionar no Carrinho</button>
                        </code>
                    </Col>
                    <Col sm={4} className="card">
                        <code>
                            <img src="https://cdn.iset.io/assets/37657/produtos/8811/thumb_400-400-alex0628.jpg" alt="TênisHocksCTZ22" width="250"/>
                            <h3>Tênis Hocks CTZ 22</h3>
                            <h3>R$ 289,90</h3>
                            <button className="btn btn-primary">Adicionar no Carrinho</button>
                        </code>
                    </Col>
                </Row>
            </Grid>
            <Footer/>
        </div>        
    ) 
}

export default Home;