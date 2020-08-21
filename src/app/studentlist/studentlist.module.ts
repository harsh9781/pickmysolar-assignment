import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser'
import { StudentlistComponent } from './studentlist/studentlist.component';
import{RouterModule,Routes} from '@angular/router'
import{AdminGuard} from '../guard/admin.guard'


const proRoutes: Routes= [

  {
    path:'',
    component:StudentlistComponent,
    canActivate:[AdminGuard]


  }
]

@NgModule({
  declarations: [StudentlistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),
    //BrowserModule,

  ]
})
export class StudentlistModule { }
