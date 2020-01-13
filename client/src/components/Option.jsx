import React from 'react';
import styled from 'styled-components';

const Option = (props) => (
  <Sub>
    <span>
      { props.option.option }
    </span>
    <span>
      { props.option.price }
    </span>
  </Sub>
)

export default Option;

const Sub = styled.div`
  display: flex;
  margin: 6px 6px 6px 9px;
  justify-content: space-between;
`;