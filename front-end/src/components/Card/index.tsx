import { Link } from 'react-router-dom';
import { PencilSimple, TrashSimple } from 'phosphor-react';
import axios from 'axios';

import { Container } from './styles';
import { cpfMask } from '../../utils/cpfMask';
import { calculateAge } from '../../utils/calculateAge';

interface CardDataProps {
	user: {
		id: string;
		name: string;
		cpf: string;
		birthDate: string;
		inactive: boolean;
	}
}

const Card = ({ user }: CardDataProps) => {
	function handleInactiveUser() {
		try {
			axios.put(`http://localhost:3333/users/${user.id}`, {
				...user,
				inactive: !user.inactive,
			});		
		} catch(error) {
			console.log(error);
		}
	};

  function handleDeleteUser() {
		try {
			axios.delete(`http://localhost:3333/users/${user.id}`);
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<Container isInative={user.inactive} >
			<div className="info">
				<button onClick={handleInactiveUser}>
					{user.inactive ? 'reativar' : 'inativar'}
				</button>
				<div className="user-name">
					<strong>{user.name}</strong>
				</div>
				<span>{cpfMask(user.cpf)}</span>
				<span>{calculateAge(user.birthDate)} ano(s)</span>
			</div>

			<div className="actions">
				<Link 
					to={`/users/${user.id}`} 
					state={user}
				>
					<PencilSimple size={24} />
				</Link>
				<button 
					type="button"
					onClick={handleDeleteUser}
				>
					<TrashSimple size={24} />
				</button>
			</div>
		</Container>
	)
}

export default Card;
