import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  users = [ {
    email:'harsh@gmail.com',
    plan_detail : "Admin Log In",
    role: 'admin',
    title : "Admin"

   
  },
  {
    email:'harsh@gmail.com',
    plan_detail : "Students Log In",
    role:'student',
    title : "Student"

  },
  {
    email:'harsh@gmail.com',
    plan_detail : "Teachers Log In",
    role:'teacher',
    title : "Teacher"

  }
   
]
 //plan_detail = "This is Plan details";
 description = "this is description";
 subscription_text = "This is subscription text";
 noSubscriptionText ="This is no subscription text";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToSignIn(subscription){
    console.log(subscription);
   this.router.navigate(['/login'],{queryParams:{user:subscription}})

  }

}
