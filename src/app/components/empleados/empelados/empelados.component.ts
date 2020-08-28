import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Empleado } from 'src/app/models/empleados.model';
import { EmpeladosService } from 'src/app/services/EmpeladosService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empelados',
  templateUrl: './empelados.component.html',
  styles: [
  ]
})
export class EmpeladosComponent implements OnInit {
  EmpleadorForm:FormGroup;
  empleado : Empleado;
  isAdd=true;
  constructor(  private _crearEmpleadosServices: EmpeladosService,private _router:Router,private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this.EmpleadorForm = new FormGroup({
      "nombres" : new FormControl(),
      "apellidos" : new FormControl(),
      "tipoIdentificacion" : new FormControl(), 
      "identificacion" : new FormControl(),
      "correo" : new FormControl(),
      "salario" : new FormControl(),
      "id": new FormControl(),
    }) 
    var a = this._route.params.subscribe(params=>{
      if (params.id) {
        this.isAdd=false;
        this._crearEmpleadosServices.getEmpleado(params.id).subscribe(res=>{
          this.EmpleadorForm.patchValue(res["empleado"]);
          this.salario.patchValue(res["empleado"]["salarioMensual"])
        },err=>{

        })
      }
    })
    
  }

  postEmpleado(){
    if(this.EmpleadorForm.valid){
      this.empleado = this.EmpleadorForm.value;      
      if(this.isAdd){      
        this._crearEmpleadosServices.postEmpleado(this.empleado).subscribe(res=>{
          this._router.navigate(["/"]);
        },err=>{
          alert("Lo sentimos no se pudo guardar los datos")
        })
      }else{
        this._crearEmpleadosServices.putEmpleado(this.empleado).subscribe(res=>{
          this._router.navigate(["/"]);
        },err=>{
          alert("Lo sentimos no se pudo actualizar los datos")
        })
        
      }
    }else{
      alert("Llene todos los campos del formulario")
    }
   
  }

  get nombres(){return this.EmpleadorForm.get("nombres")}
  get apellidos(){return this.EmpleadorForm.get("apellidos")}
 
  get tipoIdentificacion(){return this.EmpleadorForm.get("tipoIdentificacion")}
  get identificacion(){return this.EmpleadorForm.get("identificacion")}
  get correo(){return this.EmpleadorForm.get("correo")}
  get salario(){return this.EmpleadorForm.get("salario")}
  get id(){return this.EmpleadorForm.get("id")}
}
