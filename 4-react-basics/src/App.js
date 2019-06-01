import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';

import Greeting from './components/Greeting'
import ActionBox from './components/ActionBox';


class App extends React.Component {

  state = {
    message: 'greetings'
  }

  constructor(props) {
    super();
    //console.log(props);
    // this.state={
    //   //
    // }
    // console.log("App :: constructor()")
  }
  changeMessage(message) {
    this.setState({ message }) // trigger v-DOM diffing
  }
  render() {
    // console.log("App :: render()")
    // console.log(this.props)
    // let title = this.props.title;
    // let trainer = this.props.trainer;
    // or
    // this.props.title = "New Title"; // illegal , props are readonly
    let { title: myTitle, trainer } = this.props; // de-structuring ( es6 )
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <h1>{myTitle} : by &nbsp;
        <span className="badge badge-info">{trainer}</span></h1>
        <hr />
        <ActionBox />
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage('')} className="btn btn-danger">Remove</button>&nbsp;
        <hr />

        {message ? <Greeting message={message} /> : null}

      </div>
    )
  }

  componentDidMount() {
    // console.log("App :: componentDidMount");
    // setTimeout(() => {
    //   let message = "..."
    //   this.setState({ message })
    // }, 3000);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("App :: componentDidUpdate");
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}
App.defaultProps = {
  // title: 'Unknown',
  trainer: 'Anonymous'
}

export default App;
