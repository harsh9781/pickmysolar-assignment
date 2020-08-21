import { Component, OnInit } from '@angular/core';
import {UserdetailsService} from '../../core/services/userdetails.service'
import { Router, RouterModule,ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
  userdata = [];

  constructor(private userdetailsService:UserdetailsService,private router:Router) { }

  ngOnInit(): void {
    this.userdata = this.userdetailsService.students;
    console.log(this.userdata);

  }

  goToaddStudent(){
    this.router.navigate(['/managestudent'])
  }

}

