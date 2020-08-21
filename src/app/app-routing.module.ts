import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TeachersComponent } from './teachers/teachers.component';
import{UpdatestudentComponent} from '../../src/app/updatestudent/updatestudent/updatestudent.component'
import{PagenotfoundComponent} from '../app/pagenotfound/pagenotfound.component'



const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
   },
  {
    path: 'admin',
    loadChildren:() => import ('../../src/app/admin/admin/admin.module') .then ( m => m.AdminModule)
  },
  {
    path: 'teacher',
    loadChildren:() => import ('../../src/app/teachers/teachers/teachers.module').then(m => m.TeachersModule)
  },
  {

    path:'student',
    loadChildren:() => import ('../app/students/students.module').then(m => m.StudentsModule)
  },
  {

    path:'studentlist',
    loadChildren:() => import ('./studentlist/studentlist.module').then(m => m.StudentlistModule)
   
  },
  
  {

    path:'managestudent',
    loadChildren:() => import ('./updatestudent/updatestudent.module').then(m => m.UpdatestudentModule)
  },
  {

    path:'manageteacher',
    loadChildren: () => import ('./updateteacher/updateteacher.module').then(m => m.UpdateteacherModule)
  },

  {
    path:'teacherlist',
    loadChildren: () => import('./teacherlist/teacherlist.module').then( m => m.TeacherlistModule)
  },

  {
    path:'home',
    component: HomeComponent  
  },

  {
    path: '**',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
