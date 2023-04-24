import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router,private service:UserServiceService){}
  email!: string;
  password!: string;
  onSubmit(){
    this.service.login(this.email, this.password)
    this.router.navigate(['../dashboard'])
  }
}
