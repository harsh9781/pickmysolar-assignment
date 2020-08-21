import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  teacher: any;
  

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
     this.teacher = params;

    })
  }
  goToHome(){
 this.router.navigate(['/home'])
  }

}
