import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
 constructor(private router:Router,private service: UserServiceService){}
 email: any = new FormControl('', [Validators.required, Validators.email]);
 name: any = new FormControl('', [Validators.required]);
 password: any = new FormControl('', [Validators.required])!;

 onSubmit(){
  this.service.edit(this.email, this.name, this.password)
  alert("updated successfully")
  this.router.navigateByUrl('/dashboard')
 }
 getErrorMessage(){
  alert("Invalid Email")
 }
}
