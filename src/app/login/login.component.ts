import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule , Validators,FormsModule } from '@angular/forms';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { InvokeFunctionExpr } from '@angular/compiler';
import {UserdetailsService} from '../../app/core/services/userdetails.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userdata = []
  user: any;
  error: boolean = true;
  

  constructor(private route:ActivatedRoute,private router: Router,private formBuilder: FormBuilder,private userdetailsService:UserdetailsService) { }

  signinForm: FormGroup;
  showPassword: boolean = false;


  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.userdata = this.userdetailsService.users;
    this.route.queryParams.subscribe(params =>{
      this.user = params['user'];
      console.log(this.user)
 
     })
  
    

  }

  signin(){
    console.log(this.signinForm.value);

    this.userdata.forEach(user=> {
            if(this.user == user.role){
              this.userdetailsService.fetchUserRole(user.role);
              if(this.signinForm.value.email === user.email  && 
                this.signinForm.value.password === user.password ){
                  this.error=false;
                 if(user.role =='admin'){
                 console.log(this.userdata);
                 this.router.navigate(['/admin'], { queryParams: user });
                 }else if(user.role =='student'){
                this.router.navigate(['/student'], { queryParams: user });

                 }else if(user.role =='teacher'){
                 console.log(user);

                 this.router.navigate(['/teacher'], { queryParams: user });

              }
            } 
          } 
        })
       console.log(this.error);
        if(this.error){
          alert("Please Enter Correct Credentials");
          // this.error = false;
          return;
        } else if(!this.error){
          this.error=true;
        }
        
        
  }
  hidePassword(type) {
    if (type == 'password') {
      this.showPassword = !this.showPassword;
      var x = document.getElementById("password") as HTMLInputElement;
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
  }

}
