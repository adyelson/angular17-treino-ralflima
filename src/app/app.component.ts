import { Componente17Component } from './componente17/componente17.component';
import { Componente16Component } from './componente16/componente16.component';
import { Componente14Component } from './componente14/componente14.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente10Component } from './componente10/componente10.component';
import { Componente11Component } from './componente11/componente11.component';
import { Componente12Component } from './componente12/componente12.component';
import { Componente13Component } from './componente13/componente13.component';
import { Componente15Component } from './componente15/componente15.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    Componente10Component,
    Componente11Component,
    Componente12Component,
    Componente13Component,
    Componente14Component,
    Componente15Component,
    Componente16Component,
    Componente17Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'treino-dois';
}
