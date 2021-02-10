import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  public produtos: Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos()
        .subscribe(
          produtos => {
            this.produtos = produtos;
            console.log(produtos);
          }
        );
  }

}
