import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../api/apirest.service';

@Component({
  selector: 'app-asignatura-alumno',
  templateUrl: './asignatura-alumno.page.html',
  styleUrls: ['./asignatura-alumno.page.scss'],
})
export class AsignaturaAlumnoPage implements OnInit {

  ramo: any;
  horas: any;

  // asignaturas = [
  //   {
  //     "id": 1,
  //     "nombre": "Arquitectura",
  //     "seccion": "001D",
  //     "sala": "203",
  //     "profesor": "José Luis Pino"
  //   },
  //   {
  //     "id": 2,
  //     "nombre": "Programación",
  //     "seccion": "001D",
  //     "sala": "201",
  //     "profesor": "Praticio Yañes"
  //   },
  //   {
  //     "id": 3,
  //     "nombre": "Calidad de softaware",
  //     "seccion": "003D",
  //     "sala": "205",
  //     "profesor": "José Luis Pino"
  //   },
  //   {
  //     "id": 4,
  //     "nombre": "Estadística descriptiva",
  //     "seccion": "002D",
  //     "sala": "104",
  //     "profesor": "Juan Pablo Muñoz"
  //   },
  //   {
  //     "id": 5,
  //     "nombre": "Matemática aplicada",
  //     "seccion": "001D",
  //     "sala": "201",
  //     "profesor": "Juan Pablo Muñoz"
  //   }
  // ]

  // horarios = [
  //   {
  //     "asignaturaId": 1,
  //     "id": 1,
  //     "dia": "Lunes",
  //     "horario": "13:40hrs"
  //   },
  //   {
  //     "asignaturaId": 2,
  //     "id": 2,
  //     "dia": "Lunes",
  //     "horario": "12:10hrs"
  //   },
  //   {
  //     "asignaturaId": 1,
  //     "id": 3,
  //     "dia": "Lunes",
  //     "horario": "15:10hrs"
  //   },
  //   {
  //     "asignaturaId": 1,
  //     "id": 4,
  //     "dia": "Martes",
  //     "horario": "12:10hrs"
  //   },
  //   {
  //     "asignaturaId": 1,
  //     "id": 5,
  //     "dia": "Viernes",
  //     "horario": "15:10hrs"
  //   },
  //   {
  //     "asignaturaId": 2,
  //     "id": 6,
  //     "dia": "Miércoles",
  //     "horario": "13:40hrs"
  //   },
  //   {
  //     "asignaturaId": 2,
  //     "id": 7,
  //     "dia": "Jueves",
  //     "horario": "14:30hrs"
  //   },
  //   {
  //     "asignaturaId": 3,
  //     "id": 8,
  //     "dia": "Martes",
  //     "horario": "13:40hrs"
  //   },
  //   {
  //     "asignaturaId": 3,
  //     "id": 9,
  //     "dia": "Martes",
  //     "horario": "15:10hrs"
  //   },
  //   {
  //     "asignaturaId": 3,
  //     "id": 10,
  //     "dia": "Miércoles",
  //     "horario": "16:40hrs"
  //   },
  //   {
  //     "asignaturaId": 4,
  //     "id": 11,
  //     "dia": "Lunes",
  //     "horario": "13:40hrs"
  //   },
  //   {
  //     "asignaturaId": 4,
  //     "id": 12,
  //     "dia": "Miércoles",
  //     "horario": "15:10hrs"
  //   },
  //   {
  //     "asignaturaId": 5,
  //     "id": 13,
  //     "dia": "Lunes",
  //     "horario": "11:30hrs"
  //   },
  //   {
  //     "asignaturaId": 5,
  //     "id": 14,
  //     "dia": "Martes",
  //     "horario": "12:10hrs"
  //   },
  //   {
  //     "asignaturaId": 5,
  //     "id": 15,
  //     "dia": "Viernes",
  //     "horario": "11:30hrs"
  //   },
  // ]

  constructor(
    private activatedRoute:ActivatedRoute,
    private apirestService:ApirestService
  ) { }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(x => {
    //   const id = Number(x.get("id"));
    //   this.asignatura = this.asignaturas.find(x => x.id == id);

    // })

    this.horitas();

    this.activatedRoute.paramMap.subscribe( x =>{
      const id = x.get('id')??'';
      if(id != '')
        this.asignatura(id);
    })
  }

  async asignatura(id:string){
    this.ramo = await this.apirestService.getAsignatura(id);
    // console.log(this.ramo.nombre);
  }

  async horitas(){
    this.horas = await this.apirestService.getHorarios();
  }

}
