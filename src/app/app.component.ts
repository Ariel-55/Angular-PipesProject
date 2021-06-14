import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-A11';
  nombre: string= "Ariel";
  valor: number =1000;
  obj={
    nombre: 'Fernando'
  }
  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }

}
