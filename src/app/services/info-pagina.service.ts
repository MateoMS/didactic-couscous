import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';
import { infoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;
  equipo: infoEquipo[] = [];

  constructor( private http: HttpClient ) { 

   console.log("service");
   this.cargarInfo();
   this.cargarEquipo();
   
  }
  
  private cargarInfo() {
    
    this.http.get('assets/data/data-pagina.json')
             .subscribe( (resp: infoPagina) => {
  
               this.cargada = true;
               this.info = resp;
               // console.log(resp);
  
             });

  }

  private cargarEquipo() {
    this.http.get('https://angular-html-ba4e0-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: infoEquipo[]) => {

      this.cargada = true;
      this.equipo = resp;
      
      // console.log(resp);
      // console.log(this.equipo);

    });
  }

}
