import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h4>Project Name</h4>
        <h3> Budget Line Items </h3>
        <Feed>
          There are { this.props.items.length } line items.
          { this.props.items.map(item => <ListItem item={item}/>)}
        </Feed>
      </div>
    )
  }
}

export default List;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;