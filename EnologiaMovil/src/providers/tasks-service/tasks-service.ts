import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLiteObject , SQLite } from '@ionic-native/sqlite';
//import { OrdenesTrabajoProvider } from '../index.services';

const DATABASE_FILE_NAME: string = 'enologia.db';
/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TasksServiceProvider {

  private db: SQLiteObject;

  constructor(public http: Http, private sqlite: SQLite) {
    console.log('Hello TasksServiceProvider Provider');
  // this.db= new SQLite();
      this.createDatabaseFile();
      //this.create('getAllOrdenesTrabajo()');

  }

  private createDatabaseFile():void {
        this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        console.log('Base de datos creada');
        this.db= db;
        this.createTables();
      })
      .catch(e => console.log(e));
  }

  private createTables(): void{
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `ordenTrabajo` ( `id` INTEGER NOT NULL, `fechaOrdenTrabajo` NUMERIC, `numeroOrdenTrabajo` NUMERIC, `codigoSector` INTEGER, `descripcionSector` TEXT, `codigoDeposito` INTEGER, `descripcionDeposito` TEXT, PRIMARY KEY(`id`) )', {})
    .then(() => {
      console.log('Tabla ordenTrabajo creada!!')
      // this.db.executeSql('create table danceMoves(name VARCHAR(32))', {})
      // .then(() => console.log('Executed SQL'))
      // .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  create(task: any){
    let sql = 'INSERT INTO tasks(id, fechaOrdenTrabajo, numeroOrdenTrabajo, codigoSector, descripcionSector, codigoDeposito, descripcionDeposito) VALUES(?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [task.id, task.fechaOrdenTrabajo, task.numeroOrdenTrabajo, task.codigoSector, task.descripcionSector, task.codigoDeposito, task.descipcionDeposito]);
  }

  delete(task: any){
    let sql = 'DELETE FROM tasks WHERE id=?';
    return this.db.executeSql(sql, [task.id]);
  }

  getAll(){
    let sql = 'SELECT * FROM tasks';
    return this.db.executeSql(sql, [])
    .then(response => {
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
      }
      return Promise.resolve( tasks );
    })
    .catch(error => Promise.reject(error));
  }

  update(task: any){
    let sql = 'UPDATE tasks SET fechaOrdenTrabajo=?, numeroOrdenTrabajo=?, codigoSector=?, descripcionSector=?, codigoDeposito=?, descripcionDeposito=? WHERE id=?';
    return this.db.executeSql(sql, [task.fechaOrdenTrabajo, task.numeroOrdenTrabajo, task.codigoSector, task.descripcionSector, task.codigoDeposito, task.descipcionDeposito, task.id]);
  }

}
