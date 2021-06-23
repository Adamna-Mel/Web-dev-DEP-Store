import React, { useState } from 'react';

const Home = () => {
       
    let [teste, setTeste] = useState([]);
    
    return (
        <div className="Home"> 
            <div>
                <div>
                    <img src="https://cdn.iset.io/assets/37657/produtos/8932/thumb_400-400-1_mbv21tsh063_c016_5resultado.jpg" alt="CamisaNewEra" width="250"/>
                    <h3>Camisa New Era</h3>
                    <h3>R$ 89,90</h3>
                    <button >Detalhes</button>
                </div>
                <div>
                    <img src="https://cdn.iset.io/assets/37657/produtos/8910/thumb_400-400-dep1466_alt.jpg" alt="CamisaDepHappyHour" width="250"/>
                    <h3>Camisa Dep Happy</h3>
                    <h3><del>R$ 89,90</del> - 69,90</h3>
                    <button className="btn btn-primary">Detalhes</button>
                </div>
                <div>
                    <img src="https://cdn.iset.io/assets/37657/produtos/8967/thumb_400-400-bdep1422_c.jpg" alt="BlusaDepMulherMascarada" width="250"/>
                    <h3>Blusa Dep Mascarada</h3>
                    <h3>R$ 109,90</h3>
                    <button className="btn btn-primary">Detalhes</button>
                </div>
            </div>
            <div>
                <div>
                    <img src="https://cdn.iset.io/assets/37657/produtos/8968/thumb_400-400-bdep1417.jpg" alt="BlusaDepFaceLeão" width="250"/>
                    <h3>Blusa Dep Face Leão</h3>
                    <h3>R$ 109,90</h3>
                    <button>Detalhes</button>
                </div>
                <div>
                    <img src="https://cdn.iset.io/assets/37657/produtos/8900/thumb_400-400-1_nfv21bon020_c002_5resultado.jpg" alt="BonéNewEraSnapbackRaiders" width="250"/>
                    <h3>Boné New Era Raiders</h3>
                    <h3><del>R$ 30,90</del> - 20,90</h3>
                    <button>Detalhes</button>
                </div>
                <div>
                    <img src="https://cdn.iset.io/assets/37657/produtos/8811/thumb_400-400-alex0628.jpg" alt="TênisHocksCTZ22" width="250"/>
                    <h3>Tênis Hocks CTZ 22</h3>
                    <h3>R$ 289,90</h3>
                    <button>Detalhes</button>
                </div>
            </div>
        </div>        
    ) 
}

export default Home;