import { Component } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pregunta } from '../../interfaces/agregar.interface';


@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styles: []
})
export class TemaComponent {

  categoria: string;
  nueva_pregunta: Pregunta = {
    categoria: '',
    // id_pregunta: '',
    pregunta: '',
    respuesta_corta: '',
    respuesta_larga: ''
  };

  preguntas: any[] = [];


  constructor(private _preguntasService: PreguntasService,
              private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params
      .subscribe( parametros => {
        this.categoria = parametros['id'];
      });

    this._preguntasService.getPreguntas()
    .subscribe( preguntas => {
          this.preguntas = preguntas;
          console.log(this.preguntas);
          });
        }
  }


