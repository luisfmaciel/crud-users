import { Link } from 'react-router-dom';
import { PencilSimple, TrashSimple } from 'phosphor-react';
import axios from 'axios';

import { Container } from './styles';
import { cpfMask } from '../../utils/cpfMask';

interface CardDataProps {
	id: string;
	name: string;
	cpf: string;
	age: number;
	inactive: boolean;
}

export default function Card(props: CardDataProps) {
	
	function handleInactiveUser() {
		try {
			axios.put(`http://localhost:3333/users/${props.id}`, {
				inactive: !props.inactive,
			});		
		} catch(error) {
			console.log(error);
		}
	};

  function handleDeleteUser() {
		try {
			axios.delete(`http://localhost:3333/users/${props.id}`);
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<Container isInative={props.inactive} >
			<div className="info">
				<button onClick={handleInactiveUser}>
					{props.inactive ? 'reativar' : 'inativar'}
				</button>
				<div className="user-name">
					<strong>{props.name}</strong>
				</div>
				<span>{cpfMask(props.cpf)}</span>
				<span>{props.age} ano(s)</span>
			</div>

			<div className="actions">
				<Link to={`/users/${props.id}`}>
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
