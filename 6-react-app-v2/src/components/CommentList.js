import React, { Component } from 'react';

// import store from '../store'
import { connect } from '../hoc/connect'
import { withStyle } from '../hoc/withStyle'

class CommentList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         comments: store.getState().comments['java']
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
    renderComments() {
        let { comments } = this.props;
        return comments.map((comment, idx) => {
            return (
                <li className="list-group-item" key={idx}>{comment}</li>
            )
        })
    }
    render() {
        return (
            <div className="bg-info">
                {this.renderComments()}
            </div>
        );
    }
}

// export default CommentList;


function mapStateToProps(state) {
    return {
        comments: state.comments['java']
    }
}

export default withStyle(connect(CommentList, mapStateToProps))