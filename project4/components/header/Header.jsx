import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <img className='pic' src='./components/header/bg_1.jpg'/>
            </div>
        );
    }
}

export default Header;