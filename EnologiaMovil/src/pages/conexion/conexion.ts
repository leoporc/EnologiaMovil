import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';
/**
 * Generated class for the ConexionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-conexion',
  templateUrl: 'conexion.html',
})
export class ConexionPage {
  status: any='';
  constructor(public navCtrl: NavController, public navParams: NavParams, public network: Network) {

  // watch network for a disconnect
  this.network.onDisconnect().subscribe(() => {
    console.log('network was disconnected :-(');
    this.status = 'Disconnected';
  });

  // watch network for a connection
  this.network.onConnect().subscribe(() => {
    console.log('network connected!');
    this.status = 'Connected';
    // We just got a connection but we need to wait briefly
    // before we determine the connection type. Might need to wait.
    // prior to doing any api requests as well.
      setTimeout(() => {
          if (this.network.type === 'wifi') {
              console.log('we got a wifi connection, woohoo!');
          }
      }, 3000);
    });
}

//     function checkConnection() {
//     var networkState = navigator.connection.type;
//
//     var states = {};
//     states[Connection.UNKNOWN]  = 'Unknown connection';
//     states[Connection.ETHERNET] = 'Ethernet connection';
//     states[Connection.WIFI]     = 'WiFi connection';
//     states[Connection.CELL_2G]  = 'Cell 2G connection';
//     states[Connection.CELL_3G]  = 'Cell 3G connection';
//     states[Connection.CELL_4G]  = 'Cell 4G connection';
//     states[Connection.CELL]     = 'Cell generic connection';
//     states[Connection.NONE]     = 'No network connection';
//
//     alert('Connection type: ' + states[networkState]);
// }
//
// checkConnection();
// }

ionViewDidLoad() {
  console.log('ionViewDidLoad NetworkPage');
}
}
