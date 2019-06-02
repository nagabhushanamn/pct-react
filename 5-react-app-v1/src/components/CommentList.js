import React, { Component } from 'react';

import store from '../store'

class CommentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: store.getState().comments['java']
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            //..
        })
    }
    componentWillUnmount() {
        //..
    }
    commonHandleLogic() {
        //..
    }
    renderComments() {
        let { comments } = this.state;
        return comments.map((comment, idx) => {
            return (
                <li className="list-group-item" key={idx}>{comment}</li>
            )
        })
    }
    render() {
        return (
            <div className="card card-body bg-info">
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

export default CommentList;