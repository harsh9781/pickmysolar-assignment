import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser'
import { UpdateteacherComponent } from './updateteacher/updateteacher.component';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import{RouterModule,Routes} from '@angular/router'
import{AdminGuard} from '../guard/admin.guard'


const proRoutes: Routes= [

  {
    path:'',
    component:UpdateteacherComponent,
    canActivate:[AdminGuard]

  }
]




@NgModule({
  declarations: [UpdateteacherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),
    //BrowserModule,
    FormsModule
  ]
})
export class UpdateteacherModule { }
