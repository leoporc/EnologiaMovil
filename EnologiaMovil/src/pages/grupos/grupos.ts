import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalleGrupoPage, NuevoGrupoPage } from '../index.pages'
import { GrupoBarricasProvider } from '../../providers/grupo-barricas/grupo-barricas';

@IonicPage()
@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html',
})
export class GruposPage {

  searchQuery: string = '';
  pagina:number = 0;
  gruposBarricas:any[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _grupoBarricasProvider:GrupoBarricasProvider ) {

      this.gruposBarricas = this._grupoBarricasProvider.grupos;

  }

  getGrupos(ev: any) {
    // Reset items back to all of the items
    this.gruposBarricas = this._grupoBarricasProvider.grupos;
    // set val to the value of the searchbar
    let val = ev.target.value;

    if (val && val.trim() != '') {

      this.buscar(val);
    }
    /*
    // if the value is an empty string don't filter the items

      this.descripcionGrupos = this.descripcionGrupos.filter( (item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }*/

  }

  buscar(termino:string){

    let descripcionGrupos: any[] = [];

    termino = termino.toLowerCase();

    for( let grupo of this.gruposBarricas ){
      let nombre = grupo.descripcionGrupoBarrica.toLowerCase();
      if( nombre.indexOf( termino ) >= 0 ){
        descripcionGrupos.push( grupo );
      }
    }
    this.gruposBarricas = descripcionGrupos;
    console.log(descripcionGrupos);

    //return this.descripcionGrupos;
  }


  verGrupo( codigo:number ){
    this._grupoBarricasProvider.getBarricas(codigo);
    this.navCtrl.push(DetalleGrupoPage);
  }

  nuevo_grupo(){
    this.navCtrl.push(NuevoGrupoPage);
  }


}
