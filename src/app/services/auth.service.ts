import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username : string, password : string) {
    return this.http.post(environment.serverAddr + 'login', {  // concaténation de l'adresse du serveur avec login et envoi des string username et password
      username,
      password
    })
  }
}
