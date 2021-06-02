import { EditFormComponent } from './edit-form/edit-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'view' , component:ViewFormComponent
  },
  {
    path:'' , component:CreateFormComponent
  },
  {
    path:'edit' , component:EditFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
