import { Component, OnInit } from '@angular/core';
import {UserdetailsService} from '../../core/services/userdetails.service'
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  userdata: { email: string; password: string; role: string;name:string; }[];
  students: any;


  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params =>{
      this.students = params;

    })
    

  }
  goToHome(){
    this.router.navigate(['/home'])
     }

}
