import React, { Component } from 'react';

import store from '../store'

class TopicList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topics: store.getState().topics
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
    renderTopics() {
        let { topics } = this.state;
        return topics.map((topic, idx) => {
            return (
                <li className="list-group-item" key={idx}>{topic}</li>
            )
        })
    }
    render() {
        return (
            <div className="card card-body">
                <ul>
                    {this.renderTopics()}
                </ul>
            </div>
        );
    }
}

export default TopicList;