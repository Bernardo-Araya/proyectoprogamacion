import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.page.html',
  styleUrls: ['./cambio.page.scss'],
})
export class CambioPage {

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  username: string = 'alumno1'; // O el nombre de usuario que estés usando

  constructor(
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  async onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    // Llamar al servicio para actualizar la contraseña
    this.authService.updatePassword(this.username, this.newPassword).subscribe(
      async (response) => {
        // Si la actualización es exitosa, mostrar mensaje de éxito
        const alert = await this.alertController.create({
          header: 'Contraseña cambiada',
          message: 'Tu contraseña ha sido actualizada con éxito.',
          buttons: ['OK'],
        });

        await alert.present();
        
        // Limpiar los campos del formulario
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.errorMessage = '';
      },
      async (error) => {
        // Si hay un error, mostrar mensaje de error
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un error al cambiar la contraseña.',
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }
}
