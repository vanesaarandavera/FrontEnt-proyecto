import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsurio } from '../model/login-usurio';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { JwtDto } from '../model/jwt-dto';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL= environment.URL + 'auth/';
  constructor (private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario ): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
  } 

  public login(loginUsuario:LoginUsurio ): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario)

  }



}
