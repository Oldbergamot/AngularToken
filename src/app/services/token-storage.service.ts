import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveToken(token : string){
    sessionStorage.setItem('token', token.replace('Bearer ', ''));
  }

  public getToken() {
    return sessionStorage.getItem('token');
  }

  public saveUser(user : string) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    const user = sessionStorage.getItem('user');
    if(user){
      return JSON.parse(user);
    }
    return {};    
  }
}
