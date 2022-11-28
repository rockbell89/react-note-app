import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import * as theme from "../styles/theme";

const buttonSize = (size) => {
  let fontSize;
  switch (size) {
    case "sm":
      fontSize = "14px";
      break;
    case "md":
      fontSize = "16px";
      break;
    case "lg":
      fontSize = "18px";
      break;
  }
  return css`
    font-size: ${fontSize};
  `;
};

const buttonType = (type) => {
  let bgColor;
  let txtColor;
  let borderColor;
  let weight;

  switch (type) {
    case "primary":
      {
        borderColor = theme.$primary;
        bgColor = theme.$primary;
      }
      break;
    case "secondary":
      {
        borderColor = theme.$secondary;
        bgColor = theme.$secondary;
      }
      break;
    case "danger":
      {
        borderColor = theme.$danger;
        bgColor = theme.$danger;
      }
      break;
    case "success":
      {
        borderColor = theme.$success;
        bgColor = theme.$success;
      }
      break;
    case "warning":
      {
        borderColor = theme.$warning;
        bgColor = theme.$warning;
      }
      break;
    case "info":
      {
        borderColor = theme.$info;
        bgColor = theme.$info;
      }
      break;
    case "outline-primary":
      {
        borderColor = theme.$primary;
        txtColor = theme.$primary;
      }
      break;
    case "outline-secondary":
      {
        borderColor = theme.$secondary;
        txtColor = theme.$secondary;
      }
      break;
    case "outline-danger":
      {
        borderColor = theme.$danger;
        txtColor = theme.$danger;
      }
      break;
    case "outline-success":
      {
        borderColor = theme.$success;
        txtColor = theme.$success;
      }
      break;
    case "outline-warning":
      {
        borderColor = theme.$warning;
        txtColor = theme.$warning;
      }
      break;
    case "outline-info":
      {
        borderColor = theme.$info;
        txtColor = theme.$info;
      }
      break;
    default:
      return;
  }

  // outline button
  if (type.includes("outline")) {
    bgColor = "white";
    weight = "bold";
  } else {
    txtColor = "white";
  }

  return css`
    border-color: ${borderColor};
    background-color: ${bgColor};
    color: ${txtColor};
    font-weight: ${weight};
  `;
};

const ButtonComponent = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 4px;
  ${({ type }) => buttonType(type)};
  ${({ size }) => buttonSize(size)};
`;

const Button = ({ type = "primary", size = "md", text, onClick }) => {
  return (
    <ButtonComponent type={type} size={size} onClick={onClick}>
      {text}
    </ButtonComponent>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
