import React from 'react';
import Hamburguer from './Menu.svg';

const Menu = () => {
    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent:'flex-start',
            flexDirection:'row',
            textAlign:'center'
          }}>
            <p>Menu</p>
            <img 
                src={Hamburguer}
                alt='Menu Img'
            />  
        </div>
    );
}

export default Menu;