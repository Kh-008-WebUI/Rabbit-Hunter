import React from 'react';
import { render } from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <h1>index.js top menu</h1>  
                           
            </header>
        );
    }
}



render(
    <Header data={"Header"} />,
    document.getElementById('root')
)
