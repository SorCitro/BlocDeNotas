import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: 'notas.page.html',
  styleUrls: ['notas.page.scss'],
})
export class NotasPage {
  notas: string[] = [];
  nuevaNota: string = '';

  agregarNota() {
    if (this.nuevaNota.trim() !== '') {
      this.notas.push(this.nuevaNota);
      this.nuevaNota = '';
    }
  }

  eliminarNota(index: number) {
    this.notas.splice(index, 1);
  }

  editarNota(index: number, nuevaNota: string) {
    if (nuevaNota.trim() !== '') {
      this.notas[index] = nuevaNota;
    }
  }
}
