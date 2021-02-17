import React from 'react'
import ScrollHandler from '../../controllers/Scroll'

import { Container } from './styles'

const TopMenu: React.FC = () => {
  return (
    <Container id="TopMenu">
      <a
        href="#About"
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => ScrollHandler(e)}
      >
        Dra Aline
      </a>
      <a>Planos Aceitos</a>
      <a>Ginecologia</a>
      <a>Obstetrícia</a>
      <a>O Consultório</a>
      <a>Instagram</a>
    </Container>
  )
}

export default TopMenu
