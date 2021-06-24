import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand  from 'react-bootstrap/lib/NavbarBrand';

const Header = () => {
    return (
        <div className="Header">
            <Navbar inverse>
                <NavbarHeader>
                    <NavbarBrand>
                        <a href="/">DEP Store</a>
                    </NavbarBrand>
                </NavbarHeader>
            </Navbar>
        </div>    
    )
}

export default Header;