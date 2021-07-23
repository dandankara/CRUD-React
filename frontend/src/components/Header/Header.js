import React from 'react'
import { Logo, ContainerHeader } from './style'

import LogoIcon from '../../assets/logo.png'

export default function Header() {
  return (
    <ContainerHeader>

      <Logo href="/">
        <img src={LogoIcon} alt="logo" />
      </Logo>

      <h1>Bem vindo</h1>
      <p>Cadastro de usuário</p>

    </ContainerHeader>
  )
}
