import { Tarefa } from "./tarefa";

export class Lista {
    _id!: string;
    titulo: string = "";
    descricao: string = "";
    tarefas: Tarefa[] = [];
    criadoEm: Date = new Date();
}
