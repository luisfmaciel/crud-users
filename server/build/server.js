"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const formatCpf_1 = require("./utils/formatCpf");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const prisma = new client_1.PrismaClient();
app.get('/users', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    return response.json(users);
}));
app.get('/users/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = request.params.id;
    const users = yield prisma.user.findMany({
        where: {
            id: userId,
        },
    });
    return response.json(users);
}));
app.post('/new', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    const newUser = yield prisma.user.create({
        data: {
            name: body.name,
            cpf: (0, formatCpf_1.formatCpf)(body.cpf),
            birthDate: body.birthDate,
        },
    });
    return response.status(201).json(newUser);
}));
app.put('/users/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = request.params.id;
    const body = request.body;
    const updatedUser = yield prisma.user.update({
        where: {
            id: userId,
        },
        data: Object.assign(Object.assign({}, body), { name: body.name, cpf: body.cpf, birthDate: body.birthDate }),
    });
    return response.status(201).json(updatedUser);
}));
app.delete('/users/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = request.params.id;
    yield prisma.user.delete({
        where: {
            id: userId,
        },
    });
    return response.status(204);
}));
app.listen(3333, () => console.log('Running at http://localhost:3333'));
