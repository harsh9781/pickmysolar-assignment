import { Component, OnInit } from '@angular/core';
import {UserdetailsService} from '../../core/services/userdetails.service'
import { Router, RouterModule,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.scss']
})
export class TeacherlistComponent implements OnInit {
  userdata = [];
  constructor(private userdetailsService:UserdetailsService,private router:Router) { }

  ngOnInit(): void {
    this.userdata = this.userdetailsService.teachers;
    console.log(this.userdata);

  }
  goToaddteacher(){
   this.router.navigate(['/manageteacher'])

  }
 
}
