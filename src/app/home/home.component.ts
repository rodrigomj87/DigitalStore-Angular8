import { Component, OnInit } from '@angular/core';
import { ProdutosRepositoryService } from '../shared/services/produtos-repository.service';
import { Produto } from '../_interfaces/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Produto[];

  constructor(private repository: ProdutosRepositoryService) { }

  ngOnInit(): void {
    
    this.getProdutos();
  }

  private getProdutos = () => {
    const apiAddress: string = 'lista';
    this.repository.getProdutos(apiAddress)
    .subscribe(own => {
      this.produtos = own;
    })
  }

}
