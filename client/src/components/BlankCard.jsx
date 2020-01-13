import React from 'react';
import styled from 'styled-components';

class BlankCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      cost: ''
    }
  }

  render () {
    return (
      <Form onSubmit={this.props.onItemSubmit}>
        <label>
          <Input placeholder='Add line item...' name='newLine' value={this.props.newLine} onChange={this.props.onChange}/>
        </label>
        <label>
          <Input placeholder='$...' name='newPrice' value={this.props.newPrice} onChange={this.props.onChange} />
        </label>
        <button>+</button>
      </Form>
    )
  }
}

export default BlankCard;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 248px;
`;

const Input = styled.input`
  border: none;
  border-radius: 6px;
  margin: 6px;
  padding: 6px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  // width: 248px;
`;
