import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Content } from "./Search.style";

import SearcgImg from "../../images/search-icon.svg";
export const Search = ({ setSearchTerm }) => {
  const [state, setstate] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);
  return (
    <Wrapper>
      <Content>
        <img src={SearcgImg} alt="" />
        <input
          tyle="text"
          placeholder="search..."
          onChange={(event) => setstate(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};
