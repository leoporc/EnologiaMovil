import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { SQLite } from '@ionic-native/sqlite';

//Http
import { HttpModule } from '@angular/http';

//Services
import { BarricaProvider } from '../providers/barrica/barrica';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { GrupoBarricasProvider } from '../providers/grupo-barricas/grupo-barricas';
import { OrdenesTrabajoProvider } from '../providers/ordenes-trabajo/ordenes-trabajo';
import { TasksServiceProvider } from '../providers/index.services';

//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//Pages
import { MyApp } from './app.component';
import { HomePage, LoginPage, TabsPage, MasPage, PreferenciasPage, GruposPage, BarricasPage,
         DetalleGrupoPage, NuevoGrupoPage, OperacionesPage, OrdenTrabajoPage, DetalleOperacionPage, SlidesPage, ConexionPage, LocalStoragePage} from '../pages/index.pages';

import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    MasPage,
    PreferenciasPage,
    GruposPage,
    BarricasPage,
    DetalleGrupoPage,
    NuevoGrupoPage,
    OperacionesPage,
    OrdenTrabajoPage,
    DetalleOperacionPage,
    SlidesPage,
    ConexionPage,
    LocalStoragePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    MasPage,
    PreferenciasPage,
    GruposPage,
    BarricasPage,
    DetalleGrupoPage,
    NuevoGrupoPage,
    OperacionesPage,
    OrdenTrabajoPage,
    DetalleOperacionPage,
    SlidesPage,
    ConexionPage,
    LocalStoragePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    BarricaProvider,
    UsuarioProvider,
    GrupoBarricasProvider,
    OrdenesTrabajoProvider,
    NativeStorage,
    SQLite,
    TasksServiceProvider
  ]
})
export class AppModule {}
