import { Injectable } from '@angular/core';
import { Lista } from './lista';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class ListaService {  
  listaTarefas: Tarefa[] = [
    {_id:"1", titulo:"admin", criadoEm: new Date(), concluida: true}
  ];
  listaListas: Lista[] = [
    {_id:"1", titulo:"admin", descricao:"admin", criadoEm: new Date(), tarefas: this.listaTarefas
    }
  ];

  constructor() { 

  }

  addLista(lista: Lista) {
    this.listaListas.push(lista);
  }

  getListas() {
    return this.listaListas;    
  }  

  buscarPorId(id:string):Lista {
    const lista = this.listaListas.find( lista => lista._id === id);
    return lista ?lista :new Lista();
    //if(lista) {
      //return lista
    //} else {
      //return new Lista()
    //}
  }

  editarLista(id: string, lista: Lista) {
    const index = this.getIndice(id);
    if (index >= 0) {
      this.listaListas[index] = lista;
    }
  }

  deletarLista(id:string) {
    const index = this.getIndice(id);
    console.log(index);
    if (index >= 0) {
      this.listaListas.splice(index, 1);
      console.log(this.listaListas.length)
    }

  }

  private getIndice(id:string) {
    return this.listaListas.findIndex(lista => lista._id === id);
  }

}
