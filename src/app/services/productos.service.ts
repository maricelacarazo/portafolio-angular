import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Producto} from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http : HttpClient) {
    this.CargarProductos();
  }

  private CargarProductos(){
    this.http.get<Producto[]>('https://angular-html-2eee9-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[]) => {
      this.productos = resp;
      this.cargando=false;
     /* setTimeout(()=>{
        this.cargando=false;
      }, 1000);*/
    });
  }

  getProducto(id: string){
    return this.http.get<ProductoDescripcion>(`https://angular-html-2eee9-default-rtdb.firebaseio.com/productos/${id}.json`);
  }
}
