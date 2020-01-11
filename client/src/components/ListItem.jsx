import React from 'react';
import styled from 'styled-components';

const ListItem = (props) => (
  <Card>
    { props.item.description }
  </Card>
)

export default ListItem;

const Card = styled.div`
  border: 2px gray;
  border-radius: 6px;
`;