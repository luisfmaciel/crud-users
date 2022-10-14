import { Link } from 'react-router-dom';
import { PencilSimple, TrashSimple } from 'phosphor-react';
import axios from 'axios';

import { Container } from './styles';
import { cpfMask } from '../../utils/cpfMask';
import { calculateAge } from '../../utils/calculateAge';

interface CardDataProps {
	id: string;
	name: string;
	cpf: string;
	birthDate: string;
	inactive: boolean;
}

export const Card = ({ 
	id, name, cpf, birthDate, inactive, 
}: CardDataProps) => {

	function handleInactiveUser() {
		try {
			axios.put(`http://localhost:3333/users/${id}`, {
				inactive: !inactive,
			});		
		} catch(error) {
			console.log(error);
		}
	};

  function handleDeleteUser() {
		try {
			axios.delete(`http://localhost:3333/users/${id}`);
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<Container isInative={inactive} >
			<div className="info">
				<button onClick={handleInactiveUser}>
					{inactive ? 'reativar' : 'inativar'}
				</button>
				<div className="user-name">
					<strong>{name}</strong>
				</div>
				<span>{cpfMask(cpf)}</span>
				<span>{calculateAge(birthDate)} ano(s)</span>
			</div>

			<div className="actions">
				<Link 
					to={`/users/${id}`} 
					state={{
						id, name, cpf, birthDate, inactive,
					}}
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
