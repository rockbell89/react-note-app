import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SwitchComponent = styled.div`
  border: 4px solid #000;
  border-radius: 2rem;
  padding: 0.25rem;

  input[type="checkbox"] {
    display: none;
    + label {
      position: relative;
      display: block;
      min-width: 3rem;
      height: 1rem;
      text-indent: -9999px;
      cursor: pointer;
      &:before {
        position: absolute;
        display: block;
        content: "";
        width: 1rem;
        height: 1rem;
        background-color: #000;
        border-radius: 50%;
        transform: translateX(0);
        transition: all 0.2s cubic-bezier(0.17, 0.67, 0.79, 0.98);
      }
    }
    &:checked {
      + label {
        &:before {
          transform: translateX(200%);
        }
      }
    }
  }
`;

const InputSwitch = (props) => {
  return (
    <SwitchComponent>
      <input type="checkbox" id="switch-theme-color"></input>
      <label htmlFor="switch-theme-color">테마 색상 변경</label>
    </SwitchComponent>
  );
};

InputSwitch.propTypes = {};

export default InputSwitch;
