import { Injectable } from '@angular/core';
import { Telefono } from '../models/telefonos.model'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TelefonosService {

  constructor(private http : HttpClient) { }
  postTelefono(telefono: Telefono) {
    
    
    return this.http.post<Telefono>('http://localhost:4000/api/telefonos',telefono)
  }

  getAllTelefonos():Observable<Telefono[]>{
     
     return this.http.get<Telefono[]>('http://localhost:4000/api/telefonos/')
   }
   getTelefono(id: number):Observable<Telefono> {
    return this.http.get<Telefono>('http://localhost:4000/api/telefonos/'+id)
  }
  putTelefono(telefono: Telefono):Observable<Telefono> {
    console.log(telefono.id)
    return this.http.put<Telefono>(`http://localhost:4000/api/telefonos/${telefono.id}`,telefono)
  }
  /**
   * 
   * @param id Este metodo elimina um telefono de la base de datos
   */
  deleteTelefono(id : number):Observable<Telefono> {
  
    return this.http.delete<Telefono>('http://localhost:4000/api/telefonos/'+id)
  }


}
