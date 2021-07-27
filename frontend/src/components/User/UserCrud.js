import React, { Component } from 'react'
import { Text, View } from 'react-native'

const HeaderProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários'
}

export default class UserCrud extends Component {

  render() {
    return (
      <div>Isso é pra ser a rota dos usuários</div>
    )
  }
}
