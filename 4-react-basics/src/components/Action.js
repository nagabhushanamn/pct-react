import React, { Component } from 'react';
import './Action.css';

class Action extends Component {
    state = {
        count: 0
    }
    increment() {
        let { count } = this.state;
        count += 1;
        this.setState({ count }, () => {
            setTimeout(() => {
                let { onAction, value } = this.props;
                if (onAction) {
                    onAction(count * value)
                }
            }, 0)
        })
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        let className = `btn ${value > 0 ? 'btn-success' : 'btn-warning'}`
        return (
            <div className="action">
                <div className="card card-body">
                    <button onClick={e => this.increment()} className={className}>{value}</button>
                    <hr />
                    <span className="badge badge-dark">{count}</span>
                </div>
            </div>
        );
    }
}

export default Action;