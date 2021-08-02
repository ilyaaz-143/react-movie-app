import styled from "styled-components";

export const Spinner = styled.div`
  border: 5px solid var(--lightgrey);
  border-top: 5px solid var(--medGrey);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
