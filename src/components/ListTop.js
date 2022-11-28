import React from "react";
import PropTypes from "prop-types";
import InputSearch from "./InputSearch";
import ToggleSelect from "./ToggleSelect";
import styled from "styled-components";

const ListTopWrapper = styled.div`
  display: flex;
  gap: 1rem;
  .searchFrom__input {
    width: calc(100% - 4rem);
  }
  .searchFrom__select {
    width: 4rem;
  }
`;

const ListTop = (props) => {
  return (
    <ListTopWrapper>
      <div className="searchFrom__input">
        <InputSearch></InputSearch>
      </div>
      <div className="searchFrom__select">
        <ToggleSelect></ToggleSelect>
      </div>
    </ListTopWrapper>
  );
};

ListTop.propTypes = {};

export default ListTop;
