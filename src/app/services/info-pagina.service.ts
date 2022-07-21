import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: InfoEquipo[] = [];

  constructor(private http: HttpClient)
  {
    this.CargarInfo();
    this.CargarEquipo();
  }

  private CargarInfo(){
  //Leer archivo json
  this.http.get('assets/data/data-pagina.json')
  .subscribe((resp :InfoPagina) =>{
    this.cargada = true;
    this.info = resp;
  });
  }

  private CargarEquipo(){
    this.http.get<InfoEquipo[]>('https://angular-html-2eee9-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp :InfoEquipo[]) =>{
      this.equipo = resp;
    });
  }
}
