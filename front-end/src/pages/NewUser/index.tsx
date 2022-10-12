import React from 'react'
import PageHeader from '../../components/PageHeader'
import UserForm from '../../components/UserForm'

export default function NewUser() {
  return (
    <>
      <PageHeader title={'Novo usuário'} />
      <UserForm buttonLabel={'Cadastrar'} />
    </>
  )
}
