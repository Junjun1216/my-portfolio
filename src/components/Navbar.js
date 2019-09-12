import React from 'react';

function Navbar() {
    return (
        <div style={NavbarStyle}>
            <header style = {{
                "fontSize": "30px",
                "paddingLeft": "10px"
            }}>
                Welcome Reader
            </header>
            <div style={Buttons}>
                <button className="btn" id="welcomebtn"><span>About </span></button>
                <button className="btn" id="experiencebtn"><span>Experience </span></button>
                <button className="btn" id="samplebtn"><span>Songfindrr </span></button>
                <button className="btn" id="contactbtn"><span>Contact </span></button>
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
    background: "#130b21",
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'sticky',
    top: 0
}

export default Navbar;
