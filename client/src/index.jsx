import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Graph from './components/Graph.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list',
      project: '',
      items: [{description: 'hi'}, {description: 'hello'}]
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    //
  }

  getProject() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  onChange(event) {
    this.setState({ project: event.target.value });
  }

  onSubmit(event) {
    alert('submitted');
    event.preventDefault();
  }

  onClick(event) {
    event.preventDefault();
    alert('clicked');
    this.setState({ view: 'graph' });
  }

  render () {
    if (this.state.view === 'list') {
      return (<div>
        <form onSubmit={this.onSubmit} >
          <label>
            <input type='text' name='project' value={this.state.project} placeholder='Project Name...' onChange={this.onChange} />
          </label>
        </form>
        <h1>Item List</h1>
        <List items={this.state.items}/>
        <button onClick={this.onClick} >Graph It!</button>
      </div>)
    } else if (this.state.view === 'graph') {
      return (<div>
        <Graph />
      </div>)
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));