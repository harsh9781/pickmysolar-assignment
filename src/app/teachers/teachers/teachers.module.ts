import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from  '../teachers.component'
import{RouterModule,Routes} from '@angular/router'



const proRoutes: Routes= [

  {
    path:'',
    component:TeachersComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),

  ]
})
export class TeachersModule { }
