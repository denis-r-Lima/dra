import styled from 'styled-components'

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
  font-size: 1.7rem;
  color: rgb(150, 50, 120);
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  transition: background-color linear 0.5s;
  & > a {
    margin: 1.7rem;
    cursor: pointer;
    &:hover {
      color: rgb(90, 40, 80);
    }
  }
  &.Background {
    background-color: rgba(250, 250, 250, 0.9);
  }
`
