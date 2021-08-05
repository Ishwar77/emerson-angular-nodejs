import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from './homepage.component';


const routes: Routes = [
  { path: "", component: HomepageComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class HomeModule { }
