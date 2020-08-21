import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import{RouterModule,Routes} from '@angular/router'


const proRoutes: Routes= [

  {
    path:'',
    component:StudentComponent
  }
]

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),

  ]
})
export class StudentsModule { }
