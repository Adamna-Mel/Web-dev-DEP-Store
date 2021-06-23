import React from 'react';

const Header = () => {
    return (
        <div className="Header">
            <div>
                <div>
                    <nav>
                        <div>
                            <button type="button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <a href="#">DEP</a>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div>
                <div>
                    <h1>DEP Store</h1>
                    <h2>Blusas, Camisas, Ténis, Bonés e muito mais!!</h2>
                </div>
            </div>
        </div>    
    )
}

export default Header;