import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Lista } from '../lista';
import { ListaApiService } from '../lista-api.service';
import { ListaService } from '../lista.service';

@Component({
  selector: 'tabela-listas',
  templateUrl: './tabela-listas.component.html',
  styleUrls: ['./tabela-listas.component.css']
})
export class TabelaListasComponent implements OnInit{
  @Input('nome') nomeComponente = 'Tabela de Listas';
  produtos: Lista[] = [];
  nomePesquisado = "";

 constructor(private listaApiService: ListaApiService) { 
    this.listar();
 }

 ngOnInit(): void {
 }

 listar() {
   this.listaApiService.getListas().subscribe(
     data => {
       this.produtos = data;
     }
   );
 }

 deletar(id: string){
  //this.listaService.deletarLista(id);
  this.listaApiService.deletar(id).subscribe(res => {
    this.listar();
    console.log(res);
  });
 }

}

