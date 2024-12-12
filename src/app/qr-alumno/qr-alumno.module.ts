import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrAlumnoPageRoutingModule } from './qr-alumno-routing.module';

import { QrAlumnoPage } from './qr-alumno.page';
import { QrCodeModule } from 'ng-qrcode';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrAlumnoPageRoutingModule,
    QrCodeModule
  ],
  declarations: [QrAlumnoPage, BarcodeScanningModalComponent]
})
export class QrAlumnoPageModule {}
