import React, { useState } from 'react';
import Hamburguer from './Menu.svg';
import Sidebar from '../Sidebar/Sidebar';


const Menu = () => {
    
    const [isOpen, toggleOpen] = useState(false);
    
    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent:'flex-start',
            flexDirection:'row',
            textAlign:'center'
          }}>
            <div
                onClick={() => toggleOpen(isOpen)}
            >
                <p>Menu</p>
                <img 
                    src={Hamburguer}
                    alt='Menu Img'
                />  
            </div>
            {isOpen && <Sidebar/>}
        </div>
    );
}

export default Menu;