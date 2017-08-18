import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdenesTrabajoProvider } from '../../providers/ordenes-trabajo/ordenes-trabajo';
import { OperacionesPage } from '../operaciones/operaciones';


@IonicPage()
@Component({
  selector: 'page-orden-trabajo',
  templateUrl: 'orden-trabajo.html',
})
export class OrdenTrabajoPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ordenesTrabajoProvider:OrdenesTrabajoProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdenTrabajoPage');
    for (let i = 0; i < this._ordenesTrabajoProvider.cant; i++) {
        this._ordenesTrabajoProvider[i];
        console.log(  this._ordenesTrabajoProvider[i]);
    }
  }

  verOrden( id:number , codigoOrden:number ){
    this._ordenesTrabajoProvider.getDetalleOperacion(id);
    this.navCtrl.push( OperacionesPage, { codigoOrden:codigoOrden } );

    // localStorage.setItem("this._ordenesTrabajoProvider",JSON.stringify( codigoOrden));
    // localStorage.setItem("codigoOrden", codigoOrden.toString());
  }
}
