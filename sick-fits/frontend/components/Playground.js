import React, { Component } from 'react';
import styled from 'styled-components';

const MyButton = styled.button `
  background: red;
  font-size: ${props => (props.huge ? '100px' : '20px')};
  .poop {
    color: violet;
  }
`;

class Playground extends Component {
  render() {
    return (
      <div>
        <MyButton>Button</MyButton>
        <MyButton huge>
          Huge Button
          <span className="poop">Poop</span>
        </MyButton>
      </div>
    );
  }
}

export default Playground;