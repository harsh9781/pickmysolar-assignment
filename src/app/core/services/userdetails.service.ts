import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  userRole: any;

  constructor() { }

   users = [{
    email:'Harsh9781@gmail.com',
    password:'12345678',
    role:'admin',
    name:'Rishav',
    
  },{
    email:'rishav9781@gmail.com',
    password:'12345678',
    role:'student',
    name:'Harsh',
    DOB:'25th Dec 1996',
    contact_no:'123456',
    class:' 6th std'
  },
  {
    email:'ankit.kumar122789@gmail.com',
    password:'12345678',
    role:'student',
    name:'Ankit',
    DOB:'25th Dec 1996',
    contact_no:'123456',
    class:' 12th std'
  },
  {
    email:'neha123@gmail.com',
    password:'12345678',
    role:'student',
    name:'Neha',
    DOB:'25th Dec 1995',
    contact_no:'123456',
    class:' 11th std'
  },
  {
    email:'sakshi123@gmail.com',
    password:'12345678',
    role:'student',
    name:'Sakshi',
    DOB:'25th Dec 1995',
    contact_no:'123456',
    class:'5th std'
  },
  {
    email:'hunny123@gmail.com',
    password:'12345678',
    role:'student',
    name:'hunny',
    DOB:'25th Dec 1995',
    contact_no:'123456',
    class:'3rd std'
  },
  {
    email:'jesu9781@gmail.com',
    password:'12345678',
    role:'student',
    name:'Sudhanshu',
    DOB:'25th Dec 1996',
    contact_no:'123456',
    class:' 10th std'
  },
  {
    email:'Anil@gmail.com',
    password:'12345678',
    role:'teacher',
    name:'Anil',
    DOB:'25th Dec 1996',
    contact_no:'123456',
    grade:'PGT'

  },
  {
    email:'mithu@gmail.com',
    password:'12345678',
    role:'teacher',
    name:'Mithu',
    DOB:'25th Dec 1996',
    contact_no:'123456',
    grade:'TGT'

  },
  {
    email:'Abhay@gmail.com',
    password:'12345678',
    role:'teacher',
    name:'Abhay',
    DOB:'25th Dec 1996',
    contact_no:'123456',
    grade:'Asst. Prof'

  },
  {
    email:'himanshu123@gmail.com',
    password:'12345678',
    role:'teacher',
    name:'Himanshu',
    DOB:'25th Dec 1996',
    contact_no:'123456',
    grade:'TGT'
  },
  {
    email:'amardeep123@gmail.com',
    password:'12345678',
    role:'teacher',
    name:'Amardeep',
    DOB:'25th Dec 1996',
    contact_no:'123456',
    grade:'Proffesor'
  },
  {
    email:'abhi123@gmail.com',
    password:'12345678',
    role:'teacher',
    name:'Abhishek',
    DOB:'25th Dec 1996',
    contact_no:'123456',
    grade:'Asst. prof'
  },
]


teachers = [

{
  email:'Anil@gmail.com',
  password:'12345678',
  role:'teacher',
  name:'Anil',
  DOB:'25th Dec 1996',
  contact_no:'123456',
  grade:'PGT'

},
{
  email:'mithu@gmail.com',
  password:'12345678',
  role:'teacher',
  name:'Mithu',
  DOB:'25th Dec 1996',
  contact_no:'123456',
  grade:'TGT'

},
{
  email:'Abhay@gmail.com',
  password:'12345678',
  role:'teacher',
  name:'Abhay',
  DOB:'25th Dec 1996',
  contact_no:'123456',
  grade:'Asst. Prof'

},
{
  email:'himanshu123@gmail.com',
  password:'12345678',
  role:'teacher',
  name:'Himanshu',
  DOB:'25th Dec 1996',
  contact_no:'123456',
  grade:'TGT'
},
{
  email:'amardeep123@gmail.com',
  password:'12345678',
  role:'teacher',
  name:'Amardeep',
  DOB:'25th Dec 1996',
  contact_no:'123456',
  grade:'Proffesor'
},
{
  email:'abhi123@gmail.com',
  password:'12345678',
  role:'teacher',
  name:'Abhishek',
  DOB:'25th Dec 1996',
  contact_no:'123456',
  grade:'Asst. prof'
},
]

students = [
 
{
  email:'rishav9781@gmail.com',
  password:'12345678',
  role:'student',
  name:'Harsh',
  DOB:'25th Dec 1996',
  contact_no:'123456',
  class:' 6th std'
},
{
  email:'ankit.kumar122789@gmail.com',
  password:'12345678',
  role:'student',
  name:'Ankit',
  DOB:'25th Dec 1996',
  contact_no:'123456',
  class:' 12th std'
},
{
  email:'neha123@gmail.com',
  password:'12345678',
  role:'student',
  name:'Neha',
  DOB:'25th Dec 1995',
  contact_no:'123456',
  class:' 11th std'
},
{
  email:'sakshi123@gmail.com',
  password:'12345678',
  role:'student',
  name:'Sakshi',
  DOB:'25th Dec 1995',
  contact_no:'123456',
  class:'5th std'
},
{
  email:'hunny123@gmail.com',
  password:'12345678',
  role:'student',
  name:'hunny',
  DOB:'25th Dec 1995',
  contact_no:'123456',
  class:'3rd std'
},
{
  email:'jesu9781@gmail.com',
  password:'12345678',
  role:'student',
  name:'Sudhanshu',
  DOB:'25th Dec 1996',
  contact_no:'123456',
  class:' 10th std'
}
]

  getUserData(users){
    return this.users;
  }
  putUserData(obj) : any{
    this.students.push(obj);
    return  this.students;
  }
  putTeacherData(obj) : any{
    this.teachers.push(obj);
    return  this.teachers;
  }
  
  fetchUserRole(userRole){
    this.userRole = userRole;
  }
  getUserRole(){
   return this.userRole;
  }
}
