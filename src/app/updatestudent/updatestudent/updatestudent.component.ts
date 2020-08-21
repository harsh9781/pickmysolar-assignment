import { Component, OnInit } from '@angular/core';
import {UserdetailsService} from '../../core/services/userdetails.service'
import { MatDialog } from '@angular/material/dialog';
import{UpdatedialogComponent} from '../dialog/updatedialog/updatedialog.component'



@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss']
})
export class UpdatestudentComponent implements OnInit {
  userdata = [];
  name;
  email;
  dob;
  c_n;
  class;

  constructor(public dialog: MatDialog,private userdetailsService:UserdetailsService) { }

  ngOnInit(): void {
    this.userdata = this.userdetailsService.students;
    console.log(this.userdata);
  }

  goToaddStudent(){
    
  }
  edit(student){
   this.name = student.name;
   this.email= student.email;
  this.dob = student.DOB; 
  this.c_n =  student.contact_no;
  this.class = student.class ;
  }

  
  addStudent(){

    var obj:any ={};
    obj.name = this.name;
    obj.email = this.email;
    obj.DOB = this.dob;
    obj.contact_no = this.c_n;
    obj.class= this.class;
    console.log(obj);
    console.log(this.userdetailsService.students);
    this.userdata =this.userdetailsService.putUserData(obj);
   console.log(this.userdetailsService.students);
  }
  updateStudent(){
    var obj:any={};
    this.userdata.forEach(user=>{
      if(user.email === this.email){
        user.name = this.name;
        user.DOB = this.dob;
        user.contact_no = this.c_n;
        user.class = this.class;
      }
    })
    
  }
  delete(data){
    if(true){
      const dialogRef = this.dialog.open(UpdatedialogComponent,{
        width: "400px",
        data: "student"
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

 
}
