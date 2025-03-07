import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente05',
  imports: [CommonModule],
  templateUrl: './componente05.component.html',
  styleUrl: './componente05.component.css'
})
export class Componente05Component {
  nomes:string[] = ['João', 'Lucas', 'José', 'Marcos', 'Maria']
}
