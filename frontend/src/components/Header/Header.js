import React from 'react'
import { ContainerHeader } from './style'

import LogoIcon from '../../assets/logo.png'

export default function Header() {
  return (
    <ContainerHeader>
    
      <a href="/">
        <img src={LogoIcon} alt="logo" />
      </a>

      <p>Cadastro de usuário</p>

    </ContainerHeader>
  )
}
