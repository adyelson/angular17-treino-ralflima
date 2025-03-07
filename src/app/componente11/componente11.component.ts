import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  formulario = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    idade: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(120)
    ]),
    cidade: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  editar: boolean = false;
  indice: number = -1;
  vetor: Pessoa[] = [];

  cadastrar() {
    // Cadastro Vetor
    this.vetor.push(this.formulario.value as Pessoa);
    // Limpar inputs
    this.formulario.reset();

    // console log
    console.table(this.vetor);
  }
  alterar() {

    // alterar Vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;
    // Limpar inputs
    this.formulario.reset();
    this.editar = false;

  }

  remover() {

    // alterar Vetor
    this.vetor.splice(this.indice,1);
    // Limpar inputs
    this.formulario.reset();
    this.editar = false;

  }

  selecionar(indice: number) {
    this.indice = indice;

    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });

    this.editar = true;

  }

  cancelar(){
    this.formulario.reset();
    this.editar = false;
  }

}
