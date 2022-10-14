import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import UserForm from '../../components/UserForm'

const EditUser = () => {
  const [userName, setUserName] = useState('');
  const { id } = useParams();

  useEffect(() => {
    try {
      axios.get(`http://localhost:3333/users/${id}`)
        .then(response => {
          setUserName(response.data[0].name);    
      }); 
    } catch(error) {
      console.log(error);
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
