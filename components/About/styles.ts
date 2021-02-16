import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url("/img/draaline_gravida.png") left no-repeat fixed;
  background-size: 65% auto;
  background-position-x: -30rem;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgb(237, 225, 225) 40%
  );
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Text = styled.p`
  margin-right: 5%;
  color: rgb(90, 40, 80);
  font-size: 2.3rem;
  font-weight: bold;
  max-width: 50%;
  padding: 1rem;
  font-family: "Newsreader", serif;
  opacity: 1;
  transform: translateX(0);
  transition: all linear 0.8s;
  line-height: 150%;
  &.Hidden {
    opacity: 0;
    transform: translateX(-20rem);
  }
`;
