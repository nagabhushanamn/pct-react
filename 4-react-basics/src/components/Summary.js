import React, { Component } from 'react';

class Summary extends Component {
    render() {
        let { value } = this.props;
        let className = `alert ${value > 100 ? 'alert-danger' : 'alert-info'}`
        return (
            <div className={className}>
                Total Actions : {value}
            </div>
        );
    }
}

export default Summary;