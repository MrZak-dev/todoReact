import React from 'react';
import {Link} from 'react-router-dom';
function Header(){

    return(
        <header style={headerStyle}>
            <h3>ToDo List</h3>
            <Link style={{color:'#fff',textDecoration:'none'}} to="/"> HOME </Link>  
            {'|'}
            <Link style= {{color:'#fff',textDecoration:'none'}} to="/about"> ABOUT </Link> 
        </header>
    );
}
const headerStyle = {
    backgroundColor: '#333',
    padding : '10px',
    textAlign : 'center',
    color: '#fff'
}

export default Header; 