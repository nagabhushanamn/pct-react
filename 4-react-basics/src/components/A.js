import React, { Component } from 'react';
import B from './B'
import ColorContext from './ColorContext';

class A extends Component {
    render() {
        return (
            <div className="card card-body">
                <span className="badge badge-dark">A Component</span>
                {this.props.color}
                <br />
                <ColorContext.Provider value={this.props.color}>
                    <B />
                </ColorContext.Provider>
            </div>
        );
    }
}

export default A;