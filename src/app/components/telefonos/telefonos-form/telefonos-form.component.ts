import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Telefono } from 'src/app/models/telefonos.model';
import { TelefonosService } from 'src/app/services/telefonos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-telefonos-form',
  templateUrl: './telefonos-form.component.html',
  styles: [
  ]
})
export class TelefonosFormComponent implements OnInit {

  
  TelefonoForm:FormGroup;
  telefono : Telefono;
  isAdd=true;
  constructor(  private _crearTelefonoServices: TelefonosService,private _router:Router,private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this.TelefonoForm = new FormGroup({
      "id":new FormControl(),
      "tipo" : new FormControl(),
      "numero" : new FormControl(),
      "indicativo" : new FormControl(), 
      "personaId" : new FormControl(),
     
    }) 
    var a = this._route.params.subscribe(params=>{
      if (params.id) {
        this.isAdd=false;
        this._crearTelefonoServices.getTelefono(params.id).subscribe(res=>{
          this.TelefonoForm.patchValue(res["telefono"]);
         
        },err=>{

        })
      }
    })
    
  }

  postTelefono(){
    if(this.TelefonoForm.valid){
      this.telefono = this.TelefonoForm.value;      
      if(this.isAdd){      
        this._crearTelefonoServices.postTelefono(this.telefono).subscribe(res=>{
          this._router.navigate(["/empleados/telefonos"]);
        },err=>{
          alert("Lo sentimos no se pudo guardar los datos")
        })
      }else{
        this._crearTelefonoServices.putTelefono(this.telefono).subscribe(res=>{
          this._router.navigate(["/empleados/telefonos"]);
        },err=>{
          alert("Lo sentimos no se pudo actualizar los datos")
        })
        
      }
    }else{
      alert("Llene todos los campos del formulario")
    }
   
  }

  get tipo(){return this.TelefonoForm.get("tipo")}
  get numero(){return this.TelefonoForm.get("numero")}
 
  get indicativo(){return this.TelefonoForm.get("indicativo")}
  get personaId (){return this.TelefonoForm.get("personaId")}
  get id (){return this.TelefonoForm.get("personaId")}

}
