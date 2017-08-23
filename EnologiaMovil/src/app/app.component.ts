import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { SQLite } from '@ionic-native/sqlite';
//import { TasksServiceProvider } from '../providers/index.services';
import { GruposPage, BarricasPage, TabsPage, OrdenTrabajoPage, SlidesPage, ConexionPage } from '../pages/index.pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SlidesPage;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menuCrtl: MenuController//public sqlite: SQLite,
              ) {

    this.pages = [
        { title: 'Home', component: TabsPage },
        { title: 'Administración de Grupos', component: GruposPage },
        { title: 'Leer QR', component: BarricasPage },
        { title: 'Ordenes de Trabajo', component: OrdenTrabajoPage },
        { title: 'Conexion', component: ConexionPage },
    ];

    platform.ready().then(() => {
      //this.createDatabase();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage( pagina:any ){

    this.nav.setRoot(pagina.component);
    //this.rootPage = pagina.component;
    this.menuCrtl.close();
  }
//
//   createDatabase(){
//   this.sqlite.create({
//     name: 'Enologia.db',
//     location: 'default' // the location field is required
//   })
//   .then((db) => {
//     console.log(db);
//   })
//   .catch(error =>{
//     console.error(error);
//   });
// }

}
