import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'docente',
    loadChildren: () => import('./docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'detalle-asignatura/:id',
    loadChildren: () => import('./detalle-asignatura/detalle-asignatura.module').then( m => m.DetalleAsignaturaPageModule)
  },
  {
    path: 'asignatura-alumno/:id',
    loadChildren: () => import('./asignatura-alumno/asignatura-alumno.module').then( m => m.AsignaturaAlumnoPageModule)
  },
  {
    path: 'asistencia-alumno/:id',
    loadChildren: () => import('./asistencia-alumno/asistencia-alumno.module').then( m => m.AsistenciaAlumnoPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'qr-alumno',
    loadChildren: () => import('./qr-alumno/qr-alumno.module').then( m => m.QrAlumnoPageModule)
  },
  {
    path: 'cambio',
    loadChildren: () => import('./cambio/cambio.module').then( m => m.CambioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
