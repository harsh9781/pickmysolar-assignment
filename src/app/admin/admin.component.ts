import { Component, OnInit } from '@angular/core';
import {UserdetailsService} from '../../app/core/services/userdetails.service'
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import{LogindialogComponent} from './dialog/logindialog/logindialog.component'





@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userdata: { email: string; password: string; role: string;name:string; }[];
  admin: any;


  constructor(public dialog: MatDialog,private userdetailsService:UserdetailsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.admin = params;
 
     })
  }

  goToHome(){

  }
  goToStudent(){
    if(true){
      const dialogRef = this.dialog.open(LogindialogComponent,{
        width: "400px",
        data: "student"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if (result.data == 'Yes') {
          this.router.navigate(['/studentlist']);        }
      });
    }
   
  }
  goToTeacher(){
    if(true){
      const dialogRef = this.dialog.open(LogindialogComponent,{
        width: "400px",
        data: "teacher"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if (result.data == 'Yes') {
          this.router.navigate(['/teacherlist'])
        }
        });
    }
  }

}
