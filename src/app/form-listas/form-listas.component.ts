import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from '../lista';
import { ListaApiService } from '../lista-api.service';

@Component({
  selector: 'form-listas',
  templateUrl: './form-listas.component.html',
  styleUrls: ['./form-listas.component.css']
})
export class FormListasComponent implements OnInit {
  lista: Lista = new Lista();;
  id!: string;
  botaoAcao = "Cadastrar";
  mensagem = "";

  constructor(private listaApiService: ListaApiService,
            private route: ActivatedRoute,
            private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mensagem = "";
    console.log("id",this.id);
    if(this.id) {
      this.botaoAcao = "Editar";
      this.listaApiService.buscarPorId(this.id).subscribe(list => {
        this.lista = list;     
      })
    }    
  }  

  salvar() {
    if(!this.id){ 
      this.listaApiService.inserir(this.lista).subscribe(list => {
        this.mensagem = `${list.titulo} cadastrado com sucesso!`;
        this.lista = new Lista();
      })
    }
    else {
      this.listaApiService.editar(this.id, this.lista).subscribe(list => {
        this.mensagem = `${list.titulo} editado  com sucesso!`; 
        this.lista = list;
  
      })
    }
  
  }

  cancelar() {
    this.router.navigate(['/tabela']);
  }

}
