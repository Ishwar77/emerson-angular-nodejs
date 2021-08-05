import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { DescrispancyComponent } from './descrispancy.component';


const routes: Routes = [
  { path: "", component: DescrispancyComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class DescripancyModule { }
