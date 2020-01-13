import React from 'react';
import styled from 'styled-components';
import Option from './Option.jsx';

const ListItem = (props) => (
  <Card>
    <span>
      { props.item.lineItem }
    </span>
    <span>
      { props.item.price }
    </span>
    <div>
      { props.item.options.map(option => <Option option={option}/>)}
    </div>
  </Card>
)

export default ListItem;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  margin: 6px;
  padding: 6px;
  &:hover {
    background-color: #f4f4f8;
  }
`;