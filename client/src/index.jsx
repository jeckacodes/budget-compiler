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
      newLine: '',
      newPrice: '',
      items: [{lineItem: 'hi', price: 20}, {lineItem: 'hello', price: 10}]
    }
    this.items = [{lineItem: 'hi', price: 20}, {lineItem: 'hello', price: 10}];
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onItemSubmit = this.onItemSubmit.bind(this);
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
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    alert('submitted');
    event.preventDefault();
  }

  onItemSubmit(event) {
    event.preventDefault();
    this.items.push({ lineItem: this.state.newLine, price: this.state.newPrice });
    this.setState({ items: this.items });
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
        <List items={this.state.items} onChange={this.onChange} onItemSubmit={this.onItemSubmit} newLine={this.state.newLine} newPrice={this.state.newPrice} />
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