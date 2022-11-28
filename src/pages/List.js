import React, { useCallback } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import ListTop from "../components/ListTop";
import ListCard from "../components/ListCard";
import ToggleSwitch from "../components/ToggleSwitch";
import Button from "../components/Button";
import { dummyData } from "../static/dummyData";

const Article = styled.div`
  .article__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    h1 {
      font-size: 2rem;
    }
  }
  .article__body {
    .list__contents {
      margin-top: 1rem;
      max-height: 500px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 0.75rem;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 2rem;
        background-color: #000000;
        border: 2px solid white;
      }
    }
  }
  .article__footer {
    margin-top: 1rem;
    .buttn__wrapper {
      text-align: right;
    }
  }
`;

const dataList = dummyData;

const List = (props) => {
  const handleClick = useCallback(() => {
    console.log("클릭");
  }, []);

  return (
    <Article>
      {/** 상단 영역  */}
      <div className="article__header">
        <h1>Note App</h1>
        <div>
          <ToggleSwitch></ToggleSwitch>
        </div>
      </div>
      {/** 본문 영역  */}
      <div className="article__body">
        <ListTop></ListTop>
        <div className="list__contents">
          <ul>
            {dataList.map((data) => (
              <ListCard data={data} key={data.id}></ListCard>
            ))}
          </ul>
        </div>
      </div>
      {/** 하단 영역  */}
      <div className="article__footer">
        <div className="buttn__wrapper">
          <Button
            type="primary"
            size="lg"
            text="메모 추가"
            onClick={handleClick}
          ></Button>
        </div>
      </div>
    </Article>
  );
};

List.propTypes = {};

export default List;
