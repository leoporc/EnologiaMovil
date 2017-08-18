import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { OrdenesTrabajoProvider } from '../../providers/ordenes-trabajo/ordenes-trabajo';
// import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import {LocalStoragePage} from '../local-storage/local-storage'

@IonicPage()
@Component({
  selector: 'page-operaciones',
  templateUrl: 'operaciones.html',
})
export class OperacionesPage {

  operacion:string = "trasiego";
  codigoOrden:number;
  id:number = 0;
  status: any='';
  numeroOrdenTrabajo: number=0;
  codigoSector: number=0;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform: Platform,
              private _ordenesTrabajoProvider:OrdenesTrabajoProvider,
              public network: Network
            ) {

    this.codigoOrden = this.navParams.get("codigoOrden");


    //
    // for( let op of this._ordenesTrabajoProvider.detalleOrden){
    //
    //
    // }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperacionesPage');


  }

  confirmar(idMovimiento:number, idDetalle:number){

    this._ordenesTrabajoProvider.confirmaOperacion(idMovimiento, idDetalle);



    // watch network for a disconnect
    if(this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.status = 'Disconnected';
    }))
    {
          // if (this.platform.is('cordova')) {
          // // You are on a device, cordova plugins are accessible
          // this.nativeStorage.setItem('idMovimiento', {idMovimiento})
          // .then(
          //   () => console.log('Stored item!'),
          //   error => console.error('Error storing item', error)
          // );
          // //}
          // //  else {
          let operacion = {
              idMovimiento: idMovimiento,
              idDetalle: idDetalle,
              codigoOrden: this.codigoOrden
          }
          localStorage.setItem(operacion.codigoOrden.toString()+operacion.idDetalle,JSON.stringify(operacion));
          this.operacionCorrecta();
          }


}

  cancelar(){
        this.navCtrl.pop();
        console.log("Vuelta pagina");
  }

  scan(){

      console.log("Realizando scan");

      if(!this.platform.is('cordova')){
        setTimeout(()=>{
          //this.barricas.push('LL391411239');
          //Agregar la barrica
        }, 1500)

        return;
      }
      this.barcodeScanner.scan().then((barcodeData) => {
       // Success! Barcode data is here
       console.log("result:", barcodeData.text);
       console.log("format:", barcodeData.format);
       console.log("cancelled:", barcodeData.cancelled);

      }, (err) => {
          // An error occurred
          console.error("Error: ", err );
          this.mostrarError("Error: " + err);
      });
    }

  mostrarError( mensaje:string ){
      let toast = this.toastCtrl.create({
        message: mensaje,
        duration: 2500
      });
      toast.present();

  }

  operacionCorrecta() {
    let toast = this.toastCtrl.create({
      message: 'Operacion Correcta',
      duration: 1000
    });
    toast.present();
  }

  verLocalStorage(){
        this.navCtrl.push( LocalStoragePage );
  }
  }




//
// // watch network for a connection
// this.network.onConnect().subscribe(() => {
//   console.log('network connected!');
//   this.status = 'Connected';
//   // We just got a connection but we need to wait briefly
//   // before we determine the connection type. Might need to wait.
//   // prior to doing any api requests as well.
//     setTimeout(() => {
//         if (this.network.type === 'wifi') {
//             console.log('we got a wifi connection, woohoo!');
//         }
//         if (this.network.type === 'CELL_4G '){
//            console.log('we got a 4G connection, woohoo!');
//        }
//     }, 3000);
//   });
