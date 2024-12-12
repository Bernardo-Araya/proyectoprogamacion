import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(private httpClient: HttpClient) { }

  private urlAsignaturas = 'http://localhost:3000/';
  listado: any;

  async getAsignaturas(){
    const ruta = this.urlAsignaturas + 'asignaturas';
    return await firstValueFrom(this.httpClient.get(ruta));
  }

  async getHorarios(){
    const ruta = this.urlAsignaturas + 'horarios';
    return await firstValueFrom(this.httpClient.get(ruta));
  }

  async getAsignatura(id:string){
    const ruta = this.urlAsignaturas + 'asignaturas/' + id
    return await firstValueFrom(this.httpClient.get(ruta))
  }

  async getClases(){
    const ruta = this.urlAsignaturas + 'clases'
    return await firstValueFrom(this.httpClient.get(ruta))
  }

}
