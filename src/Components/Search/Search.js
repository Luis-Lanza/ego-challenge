import React from 'react';
import Order from '../Order/Order';
import Filter from '../Filter/Filter';

import './Search.css';


const Search = () => {
    return (
        <div className='Search'>
            <Filter className='Filter'/>
            <Order className='Order'/>
        </div>
    );
}

export default Search;