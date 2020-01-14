import React from 'react';
import { VictoryBar, VictoryChart, VictoryLine, VictoryAxis } from 'victory';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Line = () => <line vectorEffect="non-scaling-stroke" y={this.props.y} />;
    return (
      <VictoryChart
        domainPadding={30}
      >
        {/* <VictoryAxis
          style={{tickLabels: {angle: -45}}}
          y='Budget'
        /> */}
        <VictoryBar
          data={this.props.data}
          x='option'
          y='price'
        />
        {Line}

        {/* <VictoryLine
              data={[
                {x: 1, y: this.props.y},
                {x: 4, y: this.props.y}
              ]}
              // domain={{
              //   x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
              //   y: [-10, 15]
              // }}
              // scale={{x: "time", y: "linear"}}
              standalone={false}
              // style={styles.lineThree}
            /> */}
      </VictoryChart>
    )
  }
}

export default Graph;