import React from 'react';
import Hamburguer from './Menu.svg';

const Menu = () => {
    return (
        <div style={{
            justifyContent:'flex-start',
            flexDirection:'row',
            alignItems:'flex-start',
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