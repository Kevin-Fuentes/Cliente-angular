import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleados.model'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmpeladosService {
 
  

  constructor(private http : HttpClient) { }
  postEmpleado(empleado: Empleado) {
    
    
    return this.http.post<Empleado>('http://localhost:4000/api/empleados',empleado)
  }

  getAllEmpleados():Observable<Empleado[]>{
     
     return this.http.get<Empleado[]>('http://localhost:4000/api/empleados')
   }
   getEmpleado(id: number):Observable<Empleado> {
    return this.http.get<Empleado>('http://localhost:4000/api/empleados/'+id)
  }
  putEmpleado(empleado: Empleado):Observable<Empleado> {
    return this.http.put<Empleado>('http://localhost:4000/api/empleados/'+empleado.id,empleado)
  }
  /**
   * 
   * @param id Este metodo elimina um empleado de la base de datos
   */
  deleteEmpleado(id : number):Observable<Empleado> {
    return this.http.delete<Empleado>('http://localhost:4000/api/empleados/'+id)
  }




}
