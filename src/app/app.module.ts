import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './common/routing/app.routing';
import { AlertService } from './common/services/alert.service';
import { UserService } from './common/services/user.service';
import { AuthenticationService } from './common/services/authentication.service';
import { AppConfig } from './app.config';


@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcKzggHUduHav6d1dRY_otlJyaKUtVKwE'
    })
  ],
  providers: [AuthenticationService, AlertService, UserService, AppConfig],
  declarations: [AppComponent, HomeComponent, LoginComponent, RegisterComponent, MapComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
