import React, { Component } from 'react';

// import store from '../store'
import { connect } from '../hoc/connect'
import { withStyle } from '../hoc/withStyle'

class TopicList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         topics: store.getState().topics
    //     }
    // }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         //..
    //     })
    // }
    // componentWillUnmount() {
    //     //..
    // }
    // commonHandleLogic() {
    //     //..
    // }
    renderTopics() {
        let { topics } = this.props;
        return topics.map((topic, idx) => {
            return (
                <li className="list-group-item" key={idx}>{topic}</li>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderTopics()}
            </div>
        );
    }
}

// export default TopicList;

function mapStateToProps(state) {
    return {
        topics: state.topics
    }
}

export default withStyle(connect(TopicList, mapStateToProps))