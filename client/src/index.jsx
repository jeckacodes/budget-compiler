import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Graph from './components/Graph.jsx';
import listData from './sampledata.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list',
      project: '',
      newLine: '',
      newPrice: '',
      items: listData
    }
    this.items = listData; // [{lineItem: 'hi', price: '20'}, {lineItem: 'hello', price: '10'}];
    this.graphData = [];
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onItemSubmit = this.onItemSubmit.bind(this);
    this.postGraph = this.postGraph.bind(this);
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

  postGraph(data) {
    $.ajax({
      method: 'POST',
      url: '/graph',
      data: {data},
      success: (data) => {
        this.graphData = data;
        console.log('post success')
      },
      error: (err) => {
        console.log('err', err);
      }
    })
    .done(() => {
      console.log('post done');
      this.setState({ view: 'graph' });
    })
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
    this.postGraph(this.state.items);
  }

  render () {
    if (this.state.view === 'list') {
      return (<div>
        <form onSubmit={this.onSubmit} >
          <label>
            <input type='text' name='project' value={this.state.project} placeholder='Project Name...' onChange={this.onChange} />
          </label>
        </form>
        <h1>{this.state.project}</h1>
        <List items={this.state.items} onChange={this.onChange} onItemSubmit={this.onItemSubmit} newLine={this.state.newLine} newPrice={this.state.newPrice} />
        <button onClick={this.onClick} >Graph It!</button>
      </div>)
    } else if (this.state.view === 'graph') {
      return (<div>
        <h3>Budget Analytics</h3>
        <Graph data={this.graphData} />
      </div>)
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));