import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL_SERVICIOS } from '../../config/url.services';
import { Operacion } from '../../app/class/operacion';

@Injectable()
export class OrdenesTrabajoProvider {

  ordenes:any[] = [];
  detalleOrden:any[] = [];
  cant:number = 0;
  tareas:any[] = [];
  origenes:any[] = [];
  confirma:string;

  constructor(public http: Http) {
    console.log('Hello OrdenesTrabajoProvider Provider');
    this.getAllOrdenesTrabajo();
  }

  getAllOrdenesTrabajo(){
    let promesa = new Promise( ( resolve, reject ) => {
      let url = URL_SERVICIOS + "/operacionesEnologicas/getOperaciones";
      this.http.get( url )
               .map( resp => resp.json() )
               .subscribe( data => {

                  if( data.error ){
                    //Aqui hay un problema
                  }else{
                    this.ordenes.push( ...data );
                  }
                })
                resolve();
    })

    return promesa;
  }

  getDetalleOperacion( id:number ){
    this.detalleOrden = [];
    this.tareas = [];
    this.origenes = [];
    let det:number = 0;
    let promesa = new Promise( ( resolve, reject ) => {
      let url = URL_SERVICIOS + "/operacionesEnologicas/getDetalleOperacion?idMovimiento=" + id;
      this.http.get( url )
               .map( resp => resp.json() )
               .subscribe( data => {
                  console.log( data );

                  if( data.error ){
                    //Aqui hay un problema
                  }else{
                    this.detalleOrden.push( ...data );
                    for (let op of this.detalleOrden ){
                      if ( det != op.idDetalle ){
                        if (det != 0){
                          operacion.origen = this.origenes;
                          this.tareas.push(operacion);
                          this.origenes = [];
                        }
                        var operacion = new Operacion();
                        det = op.idDetalle;
                      }
                      if (op.movimiento == "ORIGEN"){
                        this.origenes.push(op);
                      }else{
                        operacion.destino = op;
                      }
                    }
                    operacion.origen = this.origenes;
                    this.tareas.push(operacion);
                    console.log(this.tareas);
                  }
                })
                resolve();
    })

    return promesa;

  }

  confirmaOperacion(idMovimiento:number, idDetalle:number){
    let promesa = new Promise( ( resolve, reject ) => {
    let url = URL_SERVICIOS + "/operacionesEnologicas/confirmaOperacion?idMovimiento="+ idMovimiento + "&idDetalle=" + idDetalle;
    this.http.get( url )
             //.map( resp => resp.json() )
             .subscribe( data => {
                console.log(data);
              })
              resolve();
  })

  return promesa;
}


}
