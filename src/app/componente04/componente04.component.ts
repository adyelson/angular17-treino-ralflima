import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente04',
  imports: [CommonModule],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css'
})
export class Componente04Component {

  exibir: boolean = false;
  textoBotao: string = 'Exibir';

  public showHideSquare(): void {
    this.exibir = this.exibir ? false : true;
    this.textoBotao = this.exibir ? 'Ocultar' : 'Exibir';

  }
}
