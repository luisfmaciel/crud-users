import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import useErrors from '../../hooks/useErrors';
import { cpfMask } from '../../utils/cpfMask';
import { cpfValidate } from '../../utils/cpfValidate';
import Button from '../Button';
import FormGroup from '../FormGroup'
import Input from '../Input'
import { ButtonContainer } from './styles';

interface User {
  name: string;
  cpf: string;
  birthDate: string;
}

interface UserFormProps {
  buttonLabel: string;
}

export default function UserForm({ buttonLabel }: UserFormProps) {
  const [user, setUser] = useState<User>({ 
    name: '', 
    cpf: '', 
    birthDate: '' 
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  useEffect(() => {
    if(id) {
      try {
        axios.get(`http://localhost:3333/users/${id}`)
          .then(response => {
            setUser({
              ...response.data[0],
              cpf: cpfMask(response.data[0].cpf)
            });    
        }); 
      } catch(error) {
        console.log(error);
      }
    }
  }, []);


  function handleNameChange(event: React.ChangeEvent<HTMLInputElement> ) {
    setUser({ ...user, name: event.target.value });
    
    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleCpfChange(event: React.ChangeEvent<HTMLInputElement> ) {
    setUser({ ...user, cpf: cpfMask(event.target.value) });
    
    if (!event.target.value || !cpfValidate(event.target.value)) {      
      setError({ field: 'cpf', message: 'CPF inválido.' });
    } else {
      removeError('cpf');
    }
  }

  function handleBirthDateChange(event: React.ChangeEvent<HTMLInputElement> ) {
    setUser({ ...user, birthDate: event.target.value});
    
    if (!event.target.value) {
      setError({ field: 'birthDate', message: 'Data de Nascimento é obrigatória.' });
    } else {
      removeError('birthDate');
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    if(!user.name) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
      return;
    }

    if(!user.cpf) {
      setError({ field: 'cpf', message: 'CPF inválido.' });
      return;
    }

    if(!user.birthDate) {
      setError({ field: 'birthDate', message: 'Data de Nascimento é obrigatória.' });
      return;
    }

    if(errors.length) {
      return;
    }

    try {
      if(id) {
        axios.put(`http://localhost:3333/users/${id}`, {
          ...user,
          name: user.name,
          cpf: user.cpf,
          birthDate: user.birthDate,
        });
        navigate('/users');
        return;
      }
  
      axios.post('http://localhost:3333/new', {
        name: user.name,
        cpf: user.cpf,
        birthDate: user.birthDate,
      });
      navigate('/users');
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')} >
        <Input
          type="text"
          error={getErrorMessageByFieldName('name')}
          onChange={handleNameChange}
          placeholder="Nome *"
          value={user.name || ''}
        />
      </FormGroup>
      
      <FormGroup error={getErrorMessageByFieldName('cpf')} >
        <Input
          type="text"
          error={getErrorMessageByFieldName('cpf')}
          onChange={handleCpfChange}
          placeholder="CPF *"
          value={user.cpf || ''}
        />
      </FormGroup>
      
      <FormGroup error={getErrorMessageByFieldName('birthDate')} >
        <Input
          type="date"
          error={getErrorMessageByFieldName('birthDate')}
          onChange={handleBirthDateChange}
          placeholder="Data de Nascimento *"
          value={user.birthDate || ''}
        />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </form>
  )
}
