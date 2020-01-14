import React from 'react';
import styled from 'styled-components';
import Option from './Option.jsx';
import BlankOption from './BlankOption.jsx';

const ListItem = (props) => (
  <Card>
    <Item>
      <span>
        { props.item.lineItem }
      </span>
      <span>
        { props.item.price }
      </span>
    </Item>
    <div>
      { props.item.options.map(option => <Option option={option}/>)}
    </div>
    <BlankOption parent={props.item.lineItem} onSubmit={props.onOptionSubmit} />
  </Card>
)

export default ListItem;

const Card = styled.div`
  display: flex;
  flex-direction: column;
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

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;