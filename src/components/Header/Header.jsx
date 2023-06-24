import React from 'react';

const Header = () => {
    return (
        <div>
            <ul className='flex justify-between p-7'>
                <li><a href="">All Orders</a></li>
                <li><a href="">Regular Orders</a></li>
                <li><a href="">Express Orders</a></li>
            </ul>
        </div>
    );
};

export default Header;