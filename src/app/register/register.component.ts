import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import {AuthService} from '../service/auth.service';
//import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
 selector: 'app-register',
 templateUrl: './register.component.html',
 styleUrls: ['./register.component.css']
})export class RegisterComponent implements OnInit {
 username: String;
 password: String;
 amount:String;
 address:String;
 phone:String;


 constructor(
   private loginService: LoginService,
  //private flashMessage:FlashMessagesService,
  private authService:AuthService,
   private router: Router
 ) { }  ngOnInit() {
 }  onRegisterSubmit(){
   const user = {
     username: this.username,
     password: this.password,
	 amount:this.amount,
	 address:this.address,
     phone:this.phone
   }    // Required Fields
  /* if(!this.loginService.validateRegister(user)){
     this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
     return false;
   }    // Validate Email
   if(!this.loginService.validateEmail(user.email)){
     this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
     return false;
   }
*/
   // Register user
   this.authService.registerUser(user).subscribe(data => {
/*     if(data.success){
       this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
       this.router.navigate(['/login']);
     } else {
       this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       this.router.navigate(['/register']);
     }*/
   });  }}