import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerUserRegistrationComponent } from './admin/power-user-registration/power-user-registration.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'powerUserRegistration', component: PowerUserRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
