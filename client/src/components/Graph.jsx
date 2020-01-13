import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <VictoryChart
        domainPadding={30}
      >
        <VictoryBar
          data={this.props.data}
          x='option'
          y='price'
        />
      </VictoryChart>
    )
  }
}

export default Graph;