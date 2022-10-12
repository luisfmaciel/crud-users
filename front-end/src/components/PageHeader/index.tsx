import { Link } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';
import { Container } from './styles';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <Container>
      <Link to="/users">
        <ArrowLeft 
          size={24} 
          weight={'bold'}
        />
        <span>Votar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  )
}
