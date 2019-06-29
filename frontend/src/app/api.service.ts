import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  CONFIG = {
    baseURL: '',
    token: null,
  }

  constructor(private http : HttpClient) {
    this.CONFIG.baseURL = 'http://localhost:4000';
  }

  getUsers (){
    const url = this.CONFIG.baseURL + '/user';
    
    return this.http.get(url);
  }

  getUsersCount (){
    const url = this.CONFIG.baseURL + '/user/count';
    
    return this.http.get(url);
  }

  createUser (body: any){
    const url = this.CONFIG.baseURL + '/user/';
    return this.http.post(url,body);
  }

  getOneUser (login : String){
    const url = this.CONFIG.baseURL + '/user/' + login;
    
    return this.http.get(url);
  }

  updateUser (login : String, body: any){
    const url = this.CONFIG.baseURL + '/user/' + login;
    
    return this.http.put(url,body);
  }

  deleteUser (login : String){
    const url = this.CONFIG.baseURL + '/user/' + login;
    
    return this.http.delete(url);
  }

  getGames (){
    const url = this.CONFIG.baseURL + '/game';
    
    return this.http.get(url);
  }

  getGamesCount (){
    const url = this.CONFIG.baseURL + '/game/count';
    
    return this.http.get(url);
  }

  getOneGame (id : Number){
    const url = this.CONFIG.baseURL + '/game/' + id;
    
    return this.http.get(url);
  }

  createGame (body : any){
    const url = this.CONFIG.baseURL + '/game/';
    
    return this.http.post(url, body);
  }

  updateGame (id : Number,body : any){
    const url = this.CONFIG.baseURL + '/game/' + id;
    
    return this.http.put(url, body);
  }

  deleteGame (id : Number){
    const url = this.CONFIG.baseURL + '/game/' + id;
    
    return this.http.delete(url);
  }

}
