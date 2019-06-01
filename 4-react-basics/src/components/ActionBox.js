import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e;
        this.setState({ totalCount })
    }
    renderActions() {
        let numbers = [-1, 20, -3, 40, -5, 60];
        return numbers.map((number, idx) => {
            return <Action key={idx} value={number} onAction={e => this.incrementTotalCount(e)} />
        })
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">ActionBox : <span className="badge badge-danger">{totalCount}</span></div>
                <div className="card-body">
                    {/* 
                    <Action value={10} onAction={e => this.incrementTotalCount(e)} />
                    <Action value={-10} onAction={e => this.incrementTotalCount(e)} /> 
                    */}

                    {this.renderActions()}

                    <div style={{ clear: 'both' }}>
                        <hr />
                        <Summary value={totalCount} />
                    </div>

                </div>
            </div>
        );
    }
}

export default ActionBox;