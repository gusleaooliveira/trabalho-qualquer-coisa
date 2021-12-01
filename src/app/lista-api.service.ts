import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from './lista';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
const apiUri = "http://localhost:3000/api/listas";

@Injectable({
  providedIn: 'root'
})
export class ListaApiService {

  constructor(private http: HttpClient) { }

  getListas(): Observable<Lista[]> {
    return this.http.get<Lista[]>(apiUri);
  }

  inserir(lista: Lista): Observable<Lista>{
    return this.http.post<Lista>(apiUri,lista,httpOptions);
  }

  buscarPorId(id: string): Observable<Lista> {
    const uri = `${apiUri}/${id}`;//apiUri + "/"+ id;
    return this.http.get<Lista>(uri);
  }

  editar(id: string, lista: Lista): Observable<Lista> {
    const uri = `${apiUri}/${id}`;//apiUri + "/"+ id;
    return this.http.put<Lista>(uri, lista, httpOptions);
  } 

  deletar(id: string) {
    const uri = `${apiUri}/${id}`;//apiUri + "/"+ id;
    return this.http.delete(uri);
  }  
}
