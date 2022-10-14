import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Card  from "../../components/Card";
import { Container, EmptyListText, Header } from "./styles";

interface User {
  id: string;
  name: string;
  cpf: string;
  birthDate: string;
  inactive: boolean;
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    try {
      axios.get('http://localhost:3333/users')
        .then(response => {
          setUsers(response.data)
        });
    } catch(error) {
      console.log(error);
    }
  }, [users]);
    
  return (
    <Container>
      <Header>
        <strong>{users.length} Usuário(s)</strong>
        <Link to="/new">Novo usuário</Link>
      </Header>

      { !users.length && <EmptyListText>Nenhum usuário cadastrado =(</EmptyListText> }

      { users.map((user) => {
        return (
          <Card
            key={user.id} 
            id={user.id} 
            name={user.name} 
            cpf={user.cpf} 
            birthDate={user.birthDate} 
            inactive={user.inactive}
          />  
        )
      })}
    </Container>
  );
}

export default Home;
