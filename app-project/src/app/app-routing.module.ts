import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'curriculum-vitae',component: CurriculumComponent},
  {path: 'login',component: LoginComponent},
  {path: 'logout',component: LogoutComponent},
  {path: 'user',component: UserComponent},
  {path: 'admin',component: AdminComponent},
  {path: 'error404',component: Error404Component},
  {path: '**', pathMatch: 'full', redirectTo: 'error404'},//En caso de escribir mal una direccion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
