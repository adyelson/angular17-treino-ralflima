import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  url: string = '/assets/'
  imagem: string = ''

  public alterarImagem(): void {
    this.imagem = this.imagem.includes('dia.jpg') ? 'noite.jpg' : 'dia.jpg';
    this.imagem =  this.url + this.imagem;
  }

}
