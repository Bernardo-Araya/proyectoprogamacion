import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../api/apirest.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  listado: any;



  constructor(private apirestService:ApirestService) { }

  ngOnInit() {
    this.listar();
   
  }

  async listar(){
    this.listado = await this.apirestService.getAsignaturas();
  }

  async cargarAsignaturas() {
    try {
      this.listado = await this.apirestService.getAsignaturas(); // Llamamos al servicio para obtener las asignaturas
    } catch (error) {
      console.error('Error al cargar asignaturas:', error);
      this.listado = []; // En caso de error, dejamos la lista vacía
    }
  }

}
