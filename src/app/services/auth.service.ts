import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // URL del servidor JSON

  constructor(private http: HttpClient) {}

  /**
   * Verifica las credenciales de inicio de sesión
   * @param username - Nombre de usuario
   * @param password - Contraseña
   * @returns Observable con el usuario encontrado, si existe
   */
  login(username: string, password: string): Observable<any> {
    // Realiza una consulta al servidor para verificar usuario y contraseña
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
      map(users => {
        // Filtra si el usuario existe con las credenciales correctas
        const user = users.find(u => u.password === password);
        if (user) {
          return user;
        } else {
          throw new Error('Credenciales incorrectas');
        }
      })
    );
  }

  /**
   * Actualiza la contraseña de un usuario
   * @param username - Nombre de usuario
   * @param newPassword - Nueva contraseña
   * @returns Observable con el usuario actualizado
   */
  updatePassword(username: string, newPassword: string): Observable<any> {
    // Primero, buscamos el usuario por su nombre de usuario
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}`).pipe(
      // Aseguramos que encontramos al usuario
      map(users => {
        if (users.length > 0) {
          const user = users[0]; // Suponemos que el nombre de usuario es único
          user.password = newPassword; // Actualizamos la contraseña
          return user; // Retornamos el usuario actualizado
        }
        throw new Error('Usuario no encontrado'); // Lanzamos error si no se encuentra el usuario
      }),
      // Ahora hacemos la solicitud PUT para actualizar la contraseña del usuario
      switchMap(user => {
        return this.http.put<any>(`${this.apiUrl}/${user.id}`, user); // Enviamos el PUT para actualizar
      })
    );
  }
}
