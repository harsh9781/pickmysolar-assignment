import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from '../../admin/admin.component'
import{RouterModule,Routes} from '@angular/router'


const proRoutes: Routes= [

  {
    path:'',
    component:AdminComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),

  ]
})
export class AdminModule { }
