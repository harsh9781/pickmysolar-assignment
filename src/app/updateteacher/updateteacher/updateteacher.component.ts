import { Component, OnInit,Inject } from '@angular/core';
import {UserdetailsService} from '../../core/services/userdetails.service'
import { MatDialog } from '@angular/material/dialog';
import{UpdatedialogComponent} from '../../updatestudent/dialog/updatedialog/updatedialog.component'



@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.scss']
})
export class UpdateteacherComponent implements OnInit {
  userdata = [];
  name;
  email;
  dob;
  c_n;
  grade;

  constructor(public dialog: MatDialog,private userdetailsService:UserdetailsService) { }

  ngOnInit(): void {
    this.userdata = this.userdetailsService.teachers;
    console.log(this.userdata);

  }
  edit(teacher){
    this.name = teacher.name;
    this.email= teacher.email;
   this.dob = teacher.DOB; 
   this.c_n =  teacher.contact_no;
   this.grade = teacher.grade ;
   }

   addTeacher(){

    var obj:any ={};
    obj.name = this.name;
    obj.email = this.email;
    obj.DOB = this.dob;
    obj.contact_no = this.c_n;
    obj.grade= this.grade;
    console.log(obj);
    this.userdata =this.userdetailsService.putTeacherData(obj);
  }

  updateTeacher(){
    var obj:any={};
    this.userdata.forEach(user=>{
      if(user.email === this.email){
        user.name = this.name;
        user.DOB = this.dob;
        user.contact_no = this.c_n;
        user.grade = this.grade;
      }
    })
    
  }

  delete(data){
    if(true){
      const dialogRef = this.dialog.open(UpdatedialogComponent,{
        width: "400px",
        data: "teacher"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if (result.data == 'Yes') {
          var obj:any={}
         this.userdata.forEach(user =>{
        if(user.email === data.email ){
        this.userdata = this.userdata.filter( u => u.email != data.email )
      }
    })
        }
        });
    }

    
  }

    // var obj:any={}
    // this.userdata.forEach(user =>{
    //   if(user.email === data.email ){
    //     this.userdata = this.userdata.filter( u => u.email != data.email )
    //   }
    // })
  }




