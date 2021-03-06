import React from 'react';
import styled from 'styled-components';

class BlankCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineItem: '',
      price: '',
      options: []
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange () {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit (event) {
    event.preventDefault();
    this.props.onItemSubmit(this.state);
    this.setState({
      lineItem: '',
      price: '',
      options: []
    });
  }

  render () {
    return (
      <Form onSubmit={this.onSubmit}>
        <label>
          <Input placeholder='Add line item...' name='lineItem' value={this.state.lineItem} onChange={this.onChange}/>
        </label>
        <label>
          <Input placeholder='$...' name='price' value={this.state.price} onChange={this.onChange} />
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
