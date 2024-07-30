import React from "react";

import { BsArrowDownShort, BsArrowUpRightCircle } from "react-icons/bs";
import { BsArrowUpShort } from "react-icons/bs";

const Card = (props) => {
  const { card } = props;
  return (
    <div className="card">
      <div className="card-content">
        {card.cardIcon}
        <p>{card.cardTitle}</p>
        <div className="card-value-container">
          <h4>{card.cardValue}</h4>
          <BsArrowUpRightCircle className="card-arrow" />
        </div>
      </div>
      <div className="card-content2">
        <div
          className={
            card.cardStatsCondition === false
              ? "card-stats-red"
              : "card-stats-green"
          }
        >
          {card.cardStatsCondition === false ? (
            <BsArrowDownShort className="card-arrow" />
          ) : (
            <BsArrowUpShort className="card-arrow" />
          )}

          <p>{card.cardStats}</p>
        </div>
        <p>from last period</p>
      </div>
    </div>
  );
};

export default Card;
