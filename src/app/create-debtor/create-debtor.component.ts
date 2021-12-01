import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppMainComponent } from '../app.main.component';

@Component({
  selector: 'app-create-debtor',
  templateUrl: './create-debtor.component.html',
  styleUrls: ['./create-debtor.component.scss']
})
export class CreateDebtorComponent implements OnInit {

  constructor(public app: AppComponent, public appMain: AppMainComponent) { }

  ngOnInit(): void {
  }

}
