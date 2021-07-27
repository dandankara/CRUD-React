import React from 'react'
import { Container, Content, Links } from './style';

export default function SideBarContent() {
  return (
    <Container>

      <Links>
        <a href="#/">
          Início
        </a>

        <a href="#users">
          Usuários
        </a>
      </Links>

      <Content>
        <h1>Bem vindo</h1>
        <hr />
        <h3>Sistema de Cadastro desenvolvido com React</h3>
      </Content>

    </Container>
  )
}
