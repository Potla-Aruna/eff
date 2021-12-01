import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FirebaseService } from '../service/apiServices/firebase.service';
import {CONSTANTS} from '../../environments/globalVariables';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers : [LoginComponent]
})
export class SignupComponent implements OnInit {

    signUpForm: FormGroup;
    EMAILPATTERN = "(?!.*@.*@)[a-zA-Z0-9.-_]{1,}@{1,}[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}" ;
    constructor(private fb: FormBuilder, private msgServcRef: MessageService ,private api : FirebaseService,private router :Router,private login :LoginComponent) { }

    ngOnInit(): void {
      this.signUpForm = this.create_SignUpForm();
    }

    create_SignUpForm(): FormGroup {
      return this.fb.group({
        "first_name": [""],
        "last_name": [""],
        "email_id": [""],

        "company_id": ["", [Validators.required]],
        "mcNumber": ["", [Validators.required]],
        "phone_number": ["", [Validators.required]],
        "password": ["", [Validators.required]],
        // "cnf_password": ["", [Validators.required]],

        "created_date": [""],
        "client_id": "10001",
        "created_by": "",
        "modified_by": "",
        "modified_date": "",
        "role": "10002",
        "status": "A",
        "userid": "64682462",
        "terms_cond": [""]
      })
    }

    onSubmit_SignUpForm(formData : any){
      formData['userid'] = formData['phone_number'] ;
      delete formData['terms_cond'];
       this.api.createUser(formData).then(response=>{
        formData.userid  = response.key;
       this.api.update_Id(formData);
       this.login.ngOnDestroy();
       this.msgServcRef.add({ severity: 'success', summary: 'Info', detail: 'Signup successfull' });

       this.router.navigate(["/login"]);
      });
    }

    msg() {
      // this.msgServcRef.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    }

}
