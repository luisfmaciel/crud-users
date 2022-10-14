import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { formatCpf } from './utils/formatCpf';

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

interface User {
  id: string;
	name: string;
	cpf: string;
	birthDate: string;
	inactive: boolean;
}

app.get('/users', async (request, response) => {
  const users = await prisma.user.findMany();
  
  return response.json(users);
});

app.get('/users/:id', async (request, response) => {
  const userId = request.params.id;

  const users = await prisma.user.findMany({
    where: {
      id: userId,
    },
  });
  
  return response.json(users);
});

app.post('/new', async (request, response) => {
  const body: User = request.body;

  const newUser = await prisma.user.create({
    data: {
      ...body,
      cpf: formatCpf(body.cpf),
    },
  });

  return response.status(201).json(newUser);
});

app.put('/users/:id', async (request, response) => {
  const userId = request.params.id;
  const body: User = request.body;

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: body,
  });

  return response.status(201).json(updatedUser);
});

app.delete('/users/:id', async (request, response) => {
  const userId = request.params.id;

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  return response.status(204);
});

app.listen(3333, () => console.log('Running at http://localhost:3333'));
