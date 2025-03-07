import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  imports: [],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css'
})
export class Componente02Component {
  mensagem() {
    alert('Hello World')
  }
}
