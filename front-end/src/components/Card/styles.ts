import styled from 'styled-components';

interface Props {
	isInative: boolean;
}

export const Container = styled.div<Props>`
	background-color: ${({ theme, isInative }) => isInative ? theme.colors.gray[100] : '#fff'};
	box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
	padding: 1rem;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
	
	button {
		display: flex;
		align-items: center;
		font-size: 0.8rem;
		border-radius: 4px;
		margin-bottom: 0.5rem;
		padding: 0.3rem 0.5rem;
		background-color: transparent;
		color: ${({ theme }) => theme.colors.primary.main};
		border: 1px solid ${({ theme }) => theme.colors.primary.main};
		transition: all 0.2s ease-in;

		&:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
    color: #fff;
  	}
	}
	
	.info {
		.user-name {
			display: flex;
			padding-bottom: 0.2rem;
			align-items: center;
			text-decoration: ${({ isInative }) => isInative ? 'line-through' : null};
		}

		span {
			display: block;
			padding-bottom: 0.2rem;
			font-size: 0.9rem;
			color: ${({ theme }) => theme.colors.gray[200]};
		}
	}
	
	.actions {
		display: flex;
		align-items: center;
		padding-bottom: 0.2rem;
		
		a {
			text-decoration: none;
			color: ${({ theme }) => theme.colors.primary.main};
		}
			
		button {
			background-color: transparent;
			color: ${({ theme }) => theme.colors.danger.main};
			border: none;
			margin-left: 0.5rem;
		}
	}
`;
