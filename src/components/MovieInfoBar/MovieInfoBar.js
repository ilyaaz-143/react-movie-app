import React from "react";

//helper

import { calcTime, convertMoney } from "../../Helper";

import { Wrapper, Content } from "./MovieInfoBar.style";

const Bar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Running time:{calcTime(time)}</p>
        </div>
        <div className="column">
          <p>Total Budget:{convertMoney(budget)}</p>
        </div>
        <div className="column">
          <p>Total Revenue:{convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Bar;
