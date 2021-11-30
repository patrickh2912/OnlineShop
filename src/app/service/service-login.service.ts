import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  nombreUsuario:String
  constructor(private http:HttpClient){
    this.nombreUsuario=' '
   }
  login(user:any):Observable<any>{
    return this.http.post("http://localhost:8080/usuarios", user);

  }
}
