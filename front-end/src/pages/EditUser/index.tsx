import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import UserForm from '../../components/UserForm'

const EditUser = () => {
  const [userName, setUserName] = useState('');
  const location =  useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      setUserName(state.name)
    }
  }, []);

  return (
    <>
      <PageHeader
        title={`Editar ${userName}`}
      />

      <UserForm
        buttonLabel="Salvar Alterações"
      />
    </>
  )
}

export default EditUser;
