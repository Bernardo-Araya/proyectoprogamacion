import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturaAlumnoPage } from './asignatura-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaAlumnoPageRoutingModule {}
