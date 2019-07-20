import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { CreateFurnitureComponent } from './components/furniture/create-furniture/create-furniture.component';
import { FurnitureAllComponent } from './components/furniture/furniture-all/furniture-all.component';
import { FurnitureUserComponent } from './components/furniture/furniture-user/furniture-user.component';
import { FurnitureDetailsComponent } from './components/furniture/furniture-details/furniture-details.component';
import { EditFurnitureComponent } from './components/furniture/edit-furniture/edit-furniture.component';

import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'furniture', children: [
    {path: 'create', component: CreateFurnitureComponent, canActivate: [AuthGuard]},
    {path: 'all', component: FurnitureAllComponent, canActivate: [AuthGuard]},
    {path: 'user', component: FurnitureUserComponent, canActivate: [AuthGuard]},
    {path: 'details/:id', component: FurnitureDetailsComponent, canActivate: [AuthGuard] },
    {path: 'edit/:id', component: EditFurnitureComponent, canActivate: [AdminGuard] },
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }