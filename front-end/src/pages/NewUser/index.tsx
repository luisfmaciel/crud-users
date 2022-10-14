import PageHeader from '../../components/PageHeader'
import UserForm from '../../components/UserForm'

const NewUser = () => {
  return (
    <>
      <PageHeader title={'Novo usuário'} />
      <UserForm buttonLabel={'Cadastrar'} />
    </>
  )
}

export default NewUser;
