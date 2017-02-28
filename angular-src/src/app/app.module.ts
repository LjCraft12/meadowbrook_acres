import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CommunityComponent } from './components/community/community.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes} from  '@angular/router';
import { SecurityComponent } from './components/security/security.component';

// Custom services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path:'', component: HomeComponent },                                                                                // Setting up the path for the homepage
  { path:'register', component: RegisterComponent },                                                                    // Setting up Register route
  { path:'login', component: LoginComponent },                                                                          // Setting up Login route
  { path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},                                          // Setting up Dashboard route
  { path:'community', component: CommunityComponent },                                                                  // Setting up Community route
  { path:'profile', component: ProfileComponent,  canActivate:[AuthGuard] },                                            // Setting up Profile route
  { path:'security', component: SecurityComponent },                                                                    // Setting up Security route
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CommunityComponent,
    DashboardComponent,
    ProfileComponent,
    SecurityComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
