import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { MapComponent } from '../../map/map.component';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
// import { LoginComponent } from './login/index';
// import { RegisterComponent } from './register/index';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent }, // , canActivate: [AuthGuard]
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'map', component: MapComponent },
    // otherwise redirect to login
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
