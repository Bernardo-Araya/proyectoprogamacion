import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../api/apirest.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  nombreUsuario: any;
  listado: any;

  // asignaturas = [
  //   {
  //     "id": 1,
  //     "nombre": "Arquitectura",
  //     "seccion": "001D"
  //   },
  //   {
  //     "id": 2,
  //     "nombre": "Programación",
  //     "seccion": "001D"
  //   },
  //   {
  //     "id": 3,
  //     "nombre": "Calidad de softaware",
  //     "seccion": "003D"
  //   },
  //   {
  //     "id": 4,
  //     "nombre": "Estadística",
  //     "seccion": "002D"
  //   },
  //   {
  //     "id": 5,
  //     "nombre": "Matemática aplicada",
  //     "seccion": "001D"
  //   }
  // ]

  constructor(
    private activatedRoute:ActivatedRoute,
    private apirestService:ApirestService
  ) { }

  ngOnInit() {
    this.listar();
    // this.nombreUsuario = localStorage.getItem("Estudiante");    
    // this.nombreUsuario = this.nombreUsuario[0].toUpperCase() + this.nombreUsuario.slice(1);
  }

  async listar(){
    this.listado = await this.apirestService.getAsignaturas();
  }

}
