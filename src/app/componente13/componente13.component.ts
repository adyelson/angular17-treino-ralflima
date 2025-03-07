import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {
  //vetor
  filteredItems: Produto[]=[];
  vetor: Produto[] = [];
  editar: boolean = false;
  searchTerm:string = '';
  arquivoDuplicado: Produto[] = [];

  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });

  constructor(private servico: ProdutoService) {

  }

  ngOnInit() {
    this.selecionar();
  }

  selecionar() {
    this.servico.selecionar().subscribe(retorno => {
      this.vetor = retorno;
      this.filteredItems = retorno;
    });
  }

  cadastrar() {
    if (!this.checkDuplicate()){
      this.servico.cadastrar(this.formulario.value as Produto)
      .subscribe(retorno => {
        this.vetor.push(retorno);
        this.formulario.reset();
      })
    }
  }

  selecionarProduto(indice: number) {
    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.editar = true;
  }

  alterar() {
    this.servico.alterar(this.formulario.value as Produto)
      .subscribe(retorno => {

        let indiceAlterado = this.vetor.findIndex(obj => {
          return this.formulario.value.id === obj.id;
        });

        this.vetor[indiceAlterado] = retorno;

        this.formulario.reset();
        this.editar = false;
      })
  }

  remover(){
    this.servico.remover(this.formulario.value.id)
    .subscribe(()=>{
      let indiceRemovido = this.vetor.findIndex(obj =>{
        return obj.id === this.formulario.value.id;
      })

      this.vetor.splice(indiceRemovido,1);

      this.formulario.reset();

      this.editar = false;
    })
  }


  filtrar() {
    if (this.searchTerm.trim() === '') {
      this.filteredItems = this.vetor; // Se não houver termo de pesquisa, mostra todos
    } else {
      this.filteredItems = this.vetor.filter(item =>
        item.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) || // Filtra pelo nome
        item.valor.toString().includes(this.searchTerm) // Filtra pelo valor, convertendo o número para string
      );
    }
  }

  checkDuplicate(){
    this.arquivoDuplicado = this.vetor.filter(item =>
      item.nome.toLowerCase() === this.formulario.value.nome.toLowerCase()
    );

    if (this.arquivoDuplicado.length>0) {
      return true;
    }
    return false;
  }

}

