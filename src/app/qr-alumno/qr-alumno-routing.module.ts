import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrAlumnoPage } from './qr-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: QrAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrAlumnoPageRoutingModule {}
