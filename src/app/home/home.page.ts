import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Importa el servicio

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userInput: string = '';
  pswdInput: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService // Inyecta el servicio
  ) {}

  async inicioSesion() {
    if (this.userInput && this.pswdInput) {
      // Llama al servicio para autenticar
      this.authService.login(this.userInput, this.pswdInput).subscribe(
        async (user) => {
          if (user) {
            const alert = await this.alertController.create({
              header: 'Inicio de Sesión Exitoso',
              buttons: [
                {
                  text: 'Ok',
                  handler: () => {
                    // Redirige según el rol del usuario
                    if (user.role === 'docente') {
                      this.router.navigate(['docente']);
                    } else if (user.role === 'alumno') {
                      this.router.navigate(['estudiante']);
                    }
                  },
                },
              ],
            });
            await alert.present();
          } else {
            // Usuario no encontrado
            this.mostrarAlerta('Error', 'Usuario o contraseña incorrectos, intente nuevamente.');
          }
        },
        (error) => {
          // Error de conexión
          this.mostrarAlerta('Error', 'No se pudo conectar al servidor.');
        }
      );
    } else {
      // Campos vacíos
      this.mostrarAlerta('Error', 'Por favor completa todos los campos.');
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Ok'],
    });
    await alert.present();
  }
}
