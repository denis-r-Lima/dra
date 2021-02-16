import styled from "styled-components";

export const Container = styled.div`
  /* @media only screen and (max-width: 1300px) {
    background-position: -20rem 0%;
    background-size: calc(100% + 20rem)
  } */
  @media only screen and (max-width: 450px) {
    background-position: -25rem -5rem;
    background-size: cover;
  }
  width: 100%;
  height: 100vh;
  background: url("/img/draaline.jpg") no-repeat left top;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

export const MainText = styled.div`
  @media only screen and (max-width: 770px) {
    right: 5vw;
  }
  @media only screen and (max-width: 480px) {
    right: 0;
    left: 0;
    bottom: 0;
    max-width: 100%;
    background-color: rgb(90, 40, 80);
    color: #fff;
  }
  position: absolute;
  right: 10vw;
  bottom: 8vh;
  max-width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(90, 40, 80);
  padding: 2rem;
  & > h2 {
    font-size: 4.5rem;
    font-family: "Allura";
    padding: 2rem;
  }
  & > p {
    font-size: 1.5rem;
    font-family: "Open Sans", sans-serif;
    text-align: justify;
  }
  & > ul {
    font-size: 1.8rem;
    font-family: "Open Sans", sans-serif;
    margin: 2rem 4rem;
    font-weight: bold;
    align-self: flex-start;
  }
`;

export const Logo = styled.div`
  width: 25rem;
  position: absolute;
  top: 2rem;
  left: 4rem;
  z-index: 10;
  & > img {
    width: inherit;
  }
`;
