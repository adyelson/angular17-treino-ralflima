import { Componente15TabelaComponent } from '../componente15-tabela/componente15-tabela.component';
import { Componente15FormularioComponent } from '../componente15-formulario/componente15-formulario.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente15',
  standalone: true,
  imports: [Componente15FormularioComponent,Componente15TabelaComponent],
  templateUrl: './componente15.component.html',
  styleUrl: './componente15.component.css'
})
export class Componente15Component {
  nomes:string[]=[
    'Felix', 'Matheus', 'Júlio'
  ];

  cadastrar(nome:string){
    this.nomes.push(nome);
  }

}
