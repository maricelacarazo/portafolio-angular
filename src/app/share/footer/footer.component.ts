import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anno: number = new Date().getFullYear();
  info = this.infoPaginaService.info;

  constructor(public infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
