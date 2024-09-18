import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  lista = [
    { name: 'Cafetera', category: 'Electrodomésticos', price: 120, stock: 5 },
    { name: 'Silla Gamer', category: 'Muebles', price: 300, stock: 8 },
    { name: 'Auriculares Inalámbricos', category: 'Electrónica', price: 100, stock: 25 },
    { name: 'Zapatillas para Correr', category: 'Calzado', price: 150, stock: 12 },
  ];
}
