import React from 'react'
import { Container, DivLinks } from './style';;


export default function NavBar() {
  return (
    <Container>

      <DivLinks>
        <a href="#/">
          Início
        </a>

        <a href="#users">
          Usuários
        </a>
      </DivLinks>

    </Container>
  )
}
