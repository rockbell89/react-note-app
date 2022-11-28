import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdSort } from "react-icons/md";
import * as theme from "../styles/theme";

const SelectComponent = styled.div`
  position: relative;
  border: 4px solid #000;
  border-radius: 0.5rem;
  height: 3.5rem;

  button {
    background: none;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
  }

  .toggle__sort_button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;

    .toggle__sort_label {
      display: none;
    }

    &.toggle__sort_button--active {
      background-color: #000;
      color: white;
    }
  }

  .toggle__layer {
    position: absolute;
    right: calc(0% - 0.25rem);
    top: calc(100% + 0.5rem);
    border: 4px solid #000;
    background-color: #fff;
    border-radius: 0.5rem;
    z-index: 2;

    .toggle__layer__button {
      width: 100%;
      white-space: nowrap;
      padding: 0.75rem 0.75rem;
      + .toggle__layer__button {
        border-top: 4px solid #000;
      }
      &:hover {
        background-color: ${theme.$secondary};
        color: white;
      }
    }
  }
`;

const ToggleSelect = (props) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  const handleSortNewest = useCallback(() => {});

  const handleSortOldest = useCallback(() => {});

  return (
    <SelectComponent>
      <>
        <button
          onClick={handleToggle}
          className={
            isToggle
              ? "toggle__sort_button toggle__sort_button--active"
              : "toggle__sort_button"
          }
        >
          <MdSort size="30"></MdSort>
          <span className="toggle__sort_label">정렬</span>
        </button>
        {isToggle && (
          <div className="toggle__layer">
            <button
              onClick={handleSortNewest}
              className="toggle__layer__button"
            >
              최신 작성순
            </button>
            <button
              onClick={handleSortOldest}
              className="toggle__layer__button"
            >
              오래된 작성순
            </button>
          </div>
        )}
      </>
    </SelectComponent>
  );
};

ToggleSelect.propTypes = {};

export default ToggleSelect;
