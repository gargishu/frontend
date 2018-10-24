import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginService } from './service/login.service';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes:Routes=[
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(routes)
  ],
  providers: [LoginService,AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
