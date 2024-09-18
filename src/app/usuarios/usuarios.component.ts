import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 30, correo: 'juan.perez@example.com' },
    { nombre: 'María', apellido: 'Gómez', edad: 25, correo: 'maria.gomez@example.com' },
    { nombre: 'Carlos', apellido: 'Rodríguez', edad: 40, correo: 'carlos.rodriguez@example.com' },
    { nombre: 'Ana', apellido: 'Fernández', edad: 35, correo: 'ana.fernandez@example.com' }
  ];
}