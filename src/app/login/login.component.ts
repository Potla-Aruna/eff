import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FirebaseService } from '../service/apiServices/firebase.service';
import { CONSTANTS } from "../../environments/globalVariables";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    unsubscribeuser: any;
  isRememberMeChecked: any;
  rememberMe_Model: boolean;

    constructor(private fb: FormBuilder, private msgServcRef: MessageService, private api: FirebaseService, private router: Router) { }

    ngOnInit(): void {
      this.loginForm = this.create_LoginForm();
      let rememberMeData = JSON.parse(localStorage.getItem("rememberMe"));
      if(rememberMeData !== null && rememberMeData !== undefined){
        if(rememberMeData.isRememberMe_Enable){
          if(rememberMeData.loginDetails !== null){
            this.loginForm.get('user_id').setValue(rememberMeData.loginDetails.userID);
            this.loginForm.get('password').setValue(rememberMeData.loginDetails.password);
            this.rememberMe_Model = true ;
          }
      }else{
        this.loginForm.get('user_id').setValue("");
        this.loginForm.get('password').setValue("");
        this.rememberMe_Model = false ;
      }
      }
    }

    create_LoginForm(): FormGroup {
      return this.fb.group({
        "user_id": ["", [Validators.required, Validators.pattern(CONSTANTS.NUMBER_FORMAT)]],
        "password": ["", [Validators.required]],
        "remember_me": [false]
      })
    }

    onUserIdEnter(event) {
      event.target.value
    }


    onSubmit_LoginForm(formValue) {
    this.unsubscribeuser =  this.api.getUsers().subscribe(response => {
      let filteredData =[]
        filteredData = response.filter(each=>{
        return   ((each['phone_number'].toString() === formValue['user_id'].toString() ) && (each["password"].toString() === formValue['password'].toString() ))
        })
         if(filteredData.length > 0){
          sessionStorage.setItem("loginDetails",JSON.stringify(filteredData[0]));
          let obj:any;
          if(this.isRememberMeChecked || this.rememberMe_Model){
             obj = {
              isRememberMe_Enable:true,
              loginDetails: {
                userID: filteredData[0].phone_number  ,
                password: filteredData[0].password
              }
            }
          }else{
             obj = {
              isRememberMe_Enable:false,
              loginDetails: null
            }
          }
           localStorage.setItem("rememberMe",JSON.stringify(obj));
          this.router.navigateByUrl("/dashboard");
         }else{
          this.msgServcRef.add({ severity: 'error', summary: 'Error', detail: 'Invalid username / password .' });
         }
       },error=>{
      
       });
    }

    onRememberMeChange($event){
     this.isRememberMeChecked = $event.checked ;
    }

    ngOnDestroy(){
      if(this.unsubscribeuser !== undefined && this.unsubscribeuser !== null){
        this.unsubscribeuser.unsubscribe();

      }
    }
}
