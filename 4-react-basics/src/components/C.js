import React, { Component } from 'react';
import ColorContext from './ColorContext';

class C extends Component {
    render() {
        return (
            <div className="card card-body">
                <span className="badge badge-dark">C Component</span>
                <ColorContext.Consumer>
                    {value => "color:" + value}
                </ColorContext.Consumer>
            </div>
        );
    }
}

export default C;