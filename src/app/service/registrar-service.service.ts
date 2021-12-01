import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarServiceService {

  constructor(private http:HttpClient) { }
  registrarParte(parte:any):Observable<any>{
    return this.http.post("http://localhost:8080/registrodatospersonalesprincipales",parte);
  }
}
