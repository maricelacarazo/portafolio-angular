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
  productosFiltrado: Producto[] = [];

  constructor(private http : HttpClient) {
    this.CargarProductos();
  }

  private CargarProductos(){

    //Ejecutar cierto codigo hasta que esto se resuelva -Promesas
    return new Promise<void>((resolve, reject) => {


      this.http.get<Producto[]>('https://angular-html-2eee9-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando=false;
        resolve(); //para decir que la promesa se realizo corrrectamente
       /* setTimeout(()=>{
          this.cargando=false;
        }, 1000);*/
      });

    });


  }

  getProducto(id: string){
    return this.http.get<ProductoDescripcion>(`https://angular-html-2eee9-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){

    if(this.productos.length === 0){
      //Cargar los productos
      //Como la de arriba es una promesa entonces pongo un
      ///then para que se ejecuta despues de cargarProductos termine
        this.CargarProductos().then(()=>{
        //Despues de cargar los productos
          this.filtrarProductos(termino);
        });
    }else{
      this.filtrarProductos(termino);
    }


  }

  private filtrarProductos(termino: string){
    this.productosFiltrado = [];
    termino= termino.toLowerCase();

    this.productos.forEach(prod => {
      const tituloLower= prod.titulo.toLowerCase();
      const categoriaLower= prod.categoria.toLowerCase();

      if(categoriaLower.indexOf(termino)>=0  || tituloLower.indexOf(termino)>=0){
        this.productosFiltrado.push(prod);
      }
    });
   /* this.productosFiltrado= this.productos.filter(producto => {
      return true;
    });*/
  }
}
