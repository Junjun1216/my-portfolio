import React from 'react';

function Navbar() {
    return (
        <div style={NavbarStyle}>
            <header >
            <h1>MyPortfolio</h1>
            </header>
            <div style={Buttons}>
                <button className="btn"><span>Welcome </span></button>
                <button className="btn"><span>Experience </span></button>
                <button className="btn"><span>Sample Work </span></button>
                <button className="btn"><span>Contact </span></button>
            </div>
        </div>
    )
}

const Buttons = {
    marginLeft: 'auto',
    verticalAlign: 'center',
    display: 'flex',
    flexDirection: 'row'
}


const NavbarStyle = {
    display: 'flex',
    flexDirection: 'row',
    background: '#053f7f',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Navbar;
