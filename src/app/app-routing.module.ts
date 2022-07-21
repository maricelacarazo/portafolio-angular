import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes = [
  {path: 'home', component: PortafolioComponent},  //Cuando la ruta sea http://localhost:4200
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}  //Cualquier ruta que no sea una de las definidas
];

@NgModule({       //Decorador
  imports: [  //Como es un modulo lleva el imports
    RouterModule.forRoot(app_routes, {useHash: true}) //agrega un # http://localhost:4200/#/home por si no tenemos acceso al htaccess, entonces los urls no pasan por el index
  ],
  exports:[  //para que pueda ser utilizado afuera de este componente
  RouterModule
  ]
})

export class AppRoutingModule{  //export para usarla afuera de aqui

}

////Para probar archivo json ir a jasonparser online
//json.parser.online.fr
