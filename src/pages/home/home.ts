import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

update(todo, i) {
    let alert = this.alertCtrl.create({
      title: 'Modificar Tarea',
      message: '¿Qué deseas hacer?',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre',
          value: todo.nombre
        },
        {
          name: 'fecha',
          type: 'date',
          value: todo.fecha
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (data: any) => {
            this.todos[i] = { nombre: data.nombre, fecha: data.fecha, hecho: todo.hecho };
            this.save(todo);
          }
        }
      ]
    });
    alert.present();
  }

  delete(todo, i) {
    let alert = this.alertCtrl.create({
      title: 'Eliminar Tarea',
      message: ¿Seguro que deseas eliminar ${todo.nombre}?,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.todos.splice(i, 1);
            this.save(todo);
          }
        }
      ]
    });
    alert.present();
  }

}
