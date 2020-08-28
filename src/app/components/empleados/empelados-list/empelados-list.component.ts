import { Component, OnInit } from '@angular/core';
import {Empleado} from '../../../models/empleados.model'
import { EmpeladosService } from '../../../services/EmpeladosService'

@Component({
  selector: 'app-empelados-list',
  templateUrl: './empelados-list.component.html',
  styles: [
  ]
})
export class EmpeladosListComponent implements OnInit {
  empleadosData:Empleado[]
  model:Empleado[]
  constructor(private _empleadoServices :  EmpeladosService) { }

  ngOnInit(): void {
    this._empleadoServices.getAllEmpleados().subscribe(res=>{
      this.empleadosData = res["empleados"];
    
    },err=>{

    })
  }
  deleteEmpleado(event){
    if(confirm("Seguro desea eliminar este empelado?")){
      var id = event.target.id; 
      var index=event.target.attributes["data-index"].value
      this._empleadoServices.deleteEmpleado(id).subscribe(res=>{
        this.empleadosData.splice(index,1)
      },err=>{

      })
    }

  }

}
