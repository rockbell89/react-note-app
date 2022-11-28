import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const InputComponent = styled.div`
  display: flex;
  align-items: center;
  border: 4px solid #000;
  border-radius: 0.5rem;
  height: 3.5rem;
  overflow: hidden;
  padding: 0.25rem;
  svg {
    margin: 0 0.5rem;
  }
  input[type="text"] {
    width: 100%;
    height: 100%;
  }
`;

const InputSearch = ({ value, onChange }) => {
  return (
    <InputComponent>
      <MdSearch size="30"></MdSearch>
      <input type="text" value={value} onChange={onChange}></input>
    </InputComponent>
  );
};

InputSearch.propTypes = {};

export default InputSearch;
