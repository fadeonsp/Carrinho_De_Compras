import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // injeção de dependência
  constructor(private http: HttpClient) { }

  public UrlProdutos: string = "http://localhost:3000/";

  // retornando lista de produtos
  obterProdutos() : Observable< Produto[]>{
    return this.http
    .get<Produto[]>(this.UrlProdutos + "produtos");
  }


}
