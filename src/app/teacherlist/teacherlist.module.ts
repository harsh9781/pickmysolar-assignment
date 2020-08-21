import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser'
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import{RouterModule,Routes} from '@angular/router'
import{AdminGuard} from '../guard/admin.guard'


const proRoutes: Routes= [

  {
    path:'',
    component:TeacherlistComponent,
    canActivate:[AdminGuard]

  }
]

@NgModule({
  declarations: [TeacherlistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),
    //BrowserModule
  ]
})
export class TeacherlistModule { }
