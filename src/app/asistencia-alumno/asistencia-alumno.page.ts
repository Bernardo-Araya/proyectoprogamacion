import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../api/apirest.service';

@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.page.html',
  styleUrls: ['./asistencia-alumno.page.scss'],
})
export class AsistenciaAlumnoPage implements OnInit {

  ramo: any;
  asistencias: any;

  // asignaturas = [
  //   {
  //     "id": 1,
  //     "nombre": "Arquitectura",
  //     "asistencia": "73%"
  //   },
  //   {
  //     "id": 2,
  //     "nombre": "Programación",
  //     "asistencia": "86%"
  //   },
  //   {
  //     "id": 3,
  //     "nombre": "Calidad de softaware",
  //     "asistencia": "89%"
  //   },
  //   {
  //     "id": 4,
  //     "nombre": "Estadística descriptiva",
  //     "asistencia": "94%"
  //   },
  //   {
  //     "id": 5,
  //     "nombre": "Matemática aplicada",
  //     "asistencia": "88%"
  //   }
  // ]

  // clases = [
  //   {
  //     "asignaturaId": "1",
  //     "id": 1,
  //     "dia": "Lunes",
  //     "fecha": "15/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "1",
  //     "id": 2,
  //     "dia": "Martes",
  //     "fecha": "16/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "1",
  //     "id": 3,
  //     "dia": "Viernes",
  //     "fecha": "19/10/24",
  //     "estado": "Ausente"
  //   },
  //   {
  //     "asignaturaId": "2",
  //     "id": 4,
  //     "dia": "Miércoles",
  //     "fecha": "17/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "2",
  //     "id": 5,
  //     "dia": "Jueves",
  //     "fecha": "18/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "2",
  //     "id": 6,
  //     "dia": "Miércoles",
  //     "fecha": "24/10/24",
  //     "estado": "Ausente"
  //   },
  //   {
  //     "asignaturaId": "3",
  //     "id": 7,
  //     "dia": "Martes",
  //     "fecha": "16/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "3",
  //     "id": 8,
  //     "dia": "Miércoles",
  //     "fecha": "17/10/24",
  //     "estado": "Ausente"
  //   },
  //   {
  //     "asignaturaId": "3",
  //     "id": 9,
  //     "dia": "Martes",
  //     "fecha": "23/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "4",
  //     "id": 10,
  //     "dia": "Lunes",
  //     "fecha": "15/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "4",
  //     "id": 11,
  //     "dia": "Miércoles",
  //     "fecha": "17/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "4",
  //     "id": 12,
  //     "dia": "Lunes",
  //     "fecha": "22/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "5",
  //     "id": 13,
  //     "dia": "Lunes",
  //     "fecha": "15/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "5",
  //     "id": 14,
  //     "dia": "Martes",
  //     "fecha": "16/10/24",
  //     "estado": "Presente"
  //   },
  //   {
  //     "asignaturaId": "5",
  //     "id": 14,
  //     "dia": "Viernes",
  //     "fecha": "19/10/24",
  //     "estado": "Ausente"
  //   },
  // ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private apirestService:ApirestService
  ) { }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(x => {
    //   const id = Number(x.get("id"));
    //   this.asignatura = this.asignaturas.find(x => x.id == id);

    this.asistencia();

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

  async asistencia(){
    this.asistencias = await this.apirestService.getClases();
  }

}
