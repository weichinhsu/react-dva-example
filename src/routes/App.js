import React, { Component } from 'react';
import { connect } from 'dva';
import './App.css';
import { Card } from 'react-bootstrap';


class App extends Component {
  state = {
    load: true
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'travel/GET_search',
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list) {
      this.setState({ load: false });
    }
  }
  renderData = (val) => {
    return <Card>
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>
        {val.startDate} - {val.endDate}
      </Card.Text>
      </Card.Body>
    </Card>
  }
  render() {
    return (<div className="App">
      {this.state.load ? <p>Loading</p> :
        this.props.list.map(this.renderData)}
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.travel.list ? state.travel.list : null,
  }
}
export default connect(mapStateToProps)(App);

