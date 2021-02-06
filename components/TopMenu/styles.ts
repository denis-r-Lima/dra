import styled from "styled-components";

export const Container = styled.nav`
  @media only screen and (max-width: 480px) {
    display: none;
  }

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 5;
  padding: 0 2rem 0 0;
  font-size: 2rem;
  color: rgb(90, 40, 80);
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  & > a {
    margin: 1.7rem;
    cursor: pointer;
  }
`;
