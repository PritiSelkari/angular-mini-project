import { Component } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';


export interface UsersData {
  name: string;
  email: string;
}

const ELEMENT_DATA: UsersData[] = [
  {email: "art@gmail.com", name: 'Artificial Intelligence'},
  {email: "mic@gmail.com", name: 'Machine Learning'},
  {email:  "robot@gmail.com", name: 'Robotic Process Automation'},
  {email: "block@gmail.com", name: 'Blockchain'}
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 constructor(private router: Router, private service: UserServiceService){}

 displayedColumns: string[] = [ 'name', 'email', 'action'];
 datasource: any[] = ELEMENT_DATA;
 onEdit(user: any){
  this.router.navigateByUrl(`/edit/${user.email}`)
 }
 onDelete( user:any){
  this.service.delete()
  alert("Successfully Deleted")
 }
}

