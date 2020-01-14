import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import List from './components/List.jsx';
import Graph from './components/Graph.jsx';
import listData from './sampledata.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list',
      project: '',
      target: '',
      items: listData
    }
    this.items = listData;
    this.graphData = [];
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onItemSubmit = this.onItemSubmit.bind(this);
    this.onOptionSubmit = this.onOptionSubmit.bind(this);
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
      },
      error: (err) => {
        console.log('err', err);
      }
    })
    .done(() => {
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

  onItemSubmit(obj) {
    this.items.push(obj);
    this.setState({ items: this.items });
  }

  onOptionSubmit(option, parent) {
    for (let item of this.items) {
      if (item.lineItem === parent) {
        item.price = '';
        item.options.push(option);
      }
    }
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
          <label>
            <input type='text' name='target' value={this.state.target} placeholder='Target budget...' onChange={this.onChange} />
          </label>
        </form>
        <h1>{this.state.project}</h1>
        <List items={this.state.items}
          onChange={this.onChange}
          onItemSubmit={this.onItemSubmit}
          onOptionSubmit={this.onOptionSubmit} />
        <button onClick={this.onClick} >Graph It!</button>
      </div>)
    } else if (this.state.view === 'graph') {
      return (<div>
        <h1>{this.state.project}</h1>
        <h3>Budget Analytics</h3>
        <Graph data={this.graphData} y={this.state.target} />
      </div>)
    }
  }
}

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;

ReactDOM.render(<App />, document.getElementById('app'));
