import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.jsx';
import BlankCard from './BlankCard.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3> Budget Line Items </h3>
        <Feed>
          There are { this.props.items.length } line items.
          { this.props.items.map(item => <ListItem item={item}
            onChange={this.props.onChange}
            onOptionSubmit={this.props.onOptionSubmit} />)}
          <BlankCard onChange={this.props.onChange}
            onItemSubmit={this.props.onItemSubmit}
            newLine={this.props.newLine}
            newPrice={this.props.newPrice}/>
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
  background-color: #ebecf0;
  width: 360px;
`;