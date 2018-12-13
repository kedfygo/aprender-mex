import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

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

  constructor(private _preguntasService: PreguntasService) {
    this._preguntasService.getPreguntas()
    .subscribe( preguntas => {
        this.preguntas = preguntas;
        console.log(this.preguntas);
    });



  }

  ngOnInit() {
  }

  verMas(categoria$: string, key$: string) {
   

    this._preguntasService.getPregunta(categoria$, key$)
        .subscribe( pregunta => {
          this.pregunta = pregunta;
          console.log(pregunta);


        });
  }
}
