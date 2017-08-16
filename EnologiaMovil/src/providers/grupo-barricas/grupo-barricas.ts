import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL_SERVICIOS } from '../../config/url.services';

@Injectable()
export class GrupoBarricasProvider {

  pagina:number = 0;
  size:number= 20;
  grupos:any[] = [];
  barricas:any[] = [];

  constructor(public http: Http) {
    console.log('Hello GrupoBarricasProvider Provider');
    this.getAllGruposBarricas();
  }

  getAllGruposBarricas(){
    let promesa = new Promise( ( resolve, reject ) => {
      let url = URL_SERVICIOS + "/barricas/getAllGruposBarricas";
      this.http.get( url )
               .map( resp => resp.json() )
               .subscribe( data => {
                  console.log( data );

                  if( data.error ){
                    //Aqui hay un problema
                  }else{
                    this.grupos.push( ...data );
                    this.pagina += 1;
                  }
                })
                resolve();
    })
    return promesa;

  }

  getBarricas( codigo:number ){
    let promesa = new Promise( ( resolve, reject ) => {
      let url = URL_SERVICIOS + "/barricas/getGruposBarrica?codigo=" + codigo;
      this.http.get( url )
               .map( resp => resp.json() )
               .subscribe( data => {
                  console.log( data );

                  if( data.error ){
                    //Aqui hay un problema
                  }else{
                    this.barricas.push( ...data );
                    this.pagina += 1;
                  }
                })
                resolve();
    })
    return promesa;

  }

}
