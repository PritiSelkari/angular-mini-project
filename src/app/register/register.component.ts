import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {};
  name!: string;
  email!: string;
  password!: string;
  errorMessage!: string;
  constructor(private router:Router,private service:UserServiceService){}
  onSubmit(){
    // this.service.register(this.model)
    //         .subscribe(
    //             data => {
    //                 this.router.navigate(['/login']);
    //             },
    //             error => {
    //                 alert(error)
    //             });

                this.service.register(this.name, this.email, this.password)
                .then((data) => {
                  console.log("data------>", data)
                  this.router.navigate(['/login']);
                })
                .catch((error) => {
                  this.errorMessage = error.message;
                });

  }
}

