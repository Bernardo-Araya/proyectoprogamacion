import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaAlumnoPageRoutingModule } from './asignatura-alumno-routing.module';

import { AsignaturaAlumnoPage } from './asignatura-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaAlumnoPageRoutingModule
  ],
  declarations: [AsignaturaAlumnoPage]
})
export class AsignaturaAlumnoPageModule {}
