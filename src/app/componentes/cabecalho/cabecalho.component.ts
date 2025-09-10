import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';


// Component é considerado como classe
// A propriedades que estão dentro do docorection @Component são chamadas de metadados
@Component({  // @ faz parte do decorection do TS
  selector: 'app-cabecalho',   
  imports: [FooterComponent],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

}
