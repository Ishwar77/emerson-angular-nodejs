import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DescrispancyComponent } from './descrispancy/descrispancy.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./auth/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./homepage/home.module').then(m => m.HomeModule)
  },
  {
    path: 'descripancy',
    loadChildren: () => import('./descrispancy/descripancy.module').then(m => m.DescripancyModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardnModule)
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
