import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicioTareasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioTareasProvider {
  private tareas=[];
  private tareasAlmacenadas=[];
  constructor(public http: HttpClient) {
    console.log('Hello ServicioTareasProvider Provider');
  }


  getAlmacen(){
    return this.tareasAlmacenadas;
  }
}
