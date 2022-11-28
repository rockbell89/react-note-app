import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment/moment";

const Card = styled.div`
  border: 4px solid #000;
  border-radius: 1rem;
  padding: 1rem;

  + div {
    margin-top: 1rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

const CardBody = styled.div`
  .listCard__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 18px;
    padding-right: 1rem;
  }

  .listCard__content {
    font-size: 16px;
    color: #646464;
  }

  .listCard__date {
    display: block;
    margin-top: 0.5rem;
    text-align: right;
    line-height: 1;
  }
`;

const ListCard = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <h3 className="listCard__title">{data.title}</h3>
        <p className="listCard__content">{data.content}</p>
        <span className="listCard__date">
          {moment(data.createdAt).format("YYYY.MM.DD")}
        </span>
      </CardBody>
    </Card>
  );
};

ListCard.propTypes = {};

export default ListCard;
