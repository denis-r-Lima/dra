import React from "react";

import { Container, Logo, MainText } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      {/* <img src="/img/369084708.jpg" alt="" /> */}
      <Logo>
        <img src="/img/jdc050539.png" />
      </Logo>
      <MainText>
        <h2>Dra Aline Lima</h2>
        <p>
          Médica formada pela Universidade Federal do Espirito Santo – UFES com
          residência médica em :
        </p>
        <ul>
          <li>Ginecologia e Obstetrícia</li>
          <li>Mastologia</li>
        </ul>
        <p>
          Pelo Hospital Universitário Cassiano Antônio de Moraes – HUCAM/UFES
        </p>
      </MainText>
    </Container>
  );
};

export default Header;
