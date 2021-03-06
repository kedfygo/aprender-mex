import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { log } from 'util';
import { Pregunta } from '../../interfaces/agregar.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  preguntas: any[] = [];
  categoria: string;
  id: string;
  pregunta: string;
  tarjeta: Pregunta;

  constructor(private _preguntasService: PreguntasService) {
    this._preguntasService.getPreguntas()
    .subscribe( preguntas => {
        this.preguntas = preguntas;
        console.log(this.preguntas);
    });



  }

  ngOnInit() {
  }

  verMas( tarjeta$: Pregunta) {

    console.log(tarjeta$);
    this.tarjeta = tarjeta$;


    /*
    this._preguntasService.getPregunta(categoria$, key$)
        .subscribe( pregunta => {
          this.pregunta = pregunta;
          console.log(pregunta);


        });
*/
      }
  
}
