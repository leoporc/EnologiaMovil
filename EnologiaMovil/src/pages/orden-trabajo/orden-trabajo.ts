import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { OrdenesTrabajoProvider } from '../../providers/ordenes-trabajo/ordenes-trabajo';
import { OperacionesPage } from '../operaciones/operaciones';
import { TasksServiceProvider } from '../../providers/index.services';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@IonicPage()
@Component({
  selector: 'page-orden-trabajo',
  templateUrl: 'orden-trabajo.html',
})
export class OrdenTrabajoPage {

  tasks: any[] = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              private _ordenesTrabajoProvider:OrdenesTrabajoProvider,
              public tasksService: TasksServiceProvider,
              public alertCtrl: AlertController,
              ) {

              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdenTrabajoPage');
    // for (let i = 0; i < this._ordenesTrabajoProvider.cant; i++) {
    //     this._ordenesTrabajoProvider[i];
    //     console.log(  this._ordenesTrabajoProvider[i]);
    // }
    // this.tasksService.createTable();
    // this.tasksService.create(this._ordenesTrabajoProvider);
  }

  verOrden( id:number , codigoOrden:number ){
    this._ordenesTrabajoProvider.getDetalleOperacion(id);
    this.navCtrl.push( OperacionesPage, { codigoOrden:codigoOrden } );
    // localStorage.setItem("this._ordenesTrabajoProvider",JSON.stringify( codigoOrden));
    // localStorage.setItem("codigoOrden", codigoOrden.toString());
  }

}
