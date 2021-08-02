import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 610px;
  position: relative;
  background-repeat: no-repeat;
  animation: animateHero 1s ease;
  @keyframes animateHero {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;
export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontmed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
