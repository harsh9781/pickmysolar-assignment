import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser'
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import{RouterModule,Routes} from '@angular/router';
import{AdminGuard} from '../guard/admin.guard';
import { UpdatedialogComponent } from './dialog/updatedialog/updatedialog.component'



const proRoutes: Routes= [

  {
    path:'',
    component:UpdatestudentComponent,
     canActivate:[AdminGuard]

  }
]


@NgModule({
  declarations: [UpdatestudentComponent, UpdatedialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes),
   // BrowserModule,
    FormsModule
  ]
})
export class UpdatestudentModule { }
