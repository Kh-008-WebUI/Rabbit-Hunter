import React from 'react';
import { render } from 'react-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <h1>index.js side bar</h1>  
                           
            </nav>
        );
    }
}



render(
    <Menu data={"Header"} />,
    document.getElementById('root')
)
