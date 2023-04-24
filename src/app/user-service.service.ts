import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  async register(name: string, email: string, password: string): Promise<void> {
    await this.http.post('http://localhost:8000/user/register', {name:name, email:email, password:password});
    
}
  async login(email: string, password: string): Promise<void> {
    const credentials =  await this.http.post(" ",{ })
    // const user: User = {
    //   displayName: credentials.name,
    //   email: credentials.email
    // };
    // Store user details in local storage
    localStorage.setItem('currentUser', JSON.stringify(credentials));
  }
  async fetchUsers(): Promise<void> {
    await this.http.get(" ")
  }
  async edit(email: string, name: string, password: string): Promise<void>{
    await this.http.put(" ",{ })
  }
  delete(){
    return this.http.delete(" ")
  }
}

