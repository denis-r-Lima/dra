import React from 'react'

import { Container, Content, Text } from './styles'

interface Props {
  children: React.ReactChild
  id: string
}

const About: React.FC<Props> = (props: Props) => {
  return (
    <Container id="About">
      <Content>
        <Text id={props.id} className="Hidden">
          {props.children}
        </Text>
      </Content>
    </Container>
  )
}

export default About
