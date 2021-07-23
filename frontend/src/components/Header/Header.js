import React from 'react'
import { ContainerHeader, LogoWelcome } from './style'

import LogoIcon from '../../assets/logo.png'

export default function Header() {
  return (
    <ContainerHeader>
      
      <LogoWelcome>
        <a href="/">
          <img src={LogoIcon} alt="logo" />
        </a>
        <h1>Bem vindo</h1>
      </LogoWelcome>

      <p>Cadastro de usuário</p>

    </ContainerHeader>
  )
}
