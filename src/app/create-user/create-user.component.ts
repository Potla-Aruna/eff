import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppMainComponent } from '../app.main.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
    roles = [];

  constructor(public app: AppComponent, public appMain: AppMainComponent) { }

  ngOnInit(): void {
    this.roles = [
        {name: 'Admin'},
        {name: 'User'},
      ];
  }

}
