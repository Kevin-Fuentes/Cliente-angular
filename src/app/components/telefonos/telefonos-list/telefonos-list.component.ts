import { Component, OnInit } from '@angular/core';
import {Telefono} from '../../../models/telefonos.model'
import {TelefonosService } from '../../../services/telefonos.service'


@Component({
  selector: 'app-telefonos-list',
  templateUrl: './telefonos-list.component.html',
  styles: [
  ]
})
export class TelefonosListComponent implements OnInit {

  telefonoData:Telefono[]
  
  constructor(private _telefonoServices :  TelefonosService) { }

  ngOnInit(): void {
    this._telefonoServices.getAllTelefonos().subscribe(res=>{
      this.telefonoData = res["Telefonos"]
  
    },err=>{

    })
  }
  deleteTelefono(event){
    if(confirm("Seguro desea eliminar este empelado?")){
      var id = event.target.id; 
      var index=event.target.attributes["data-index"].value
      this._telefonoServices.deleteTelefono(id).subscribe(res=>{
        this.telefonoData.splice(index,1)
      },err=>{

      })
    }

  }

}
