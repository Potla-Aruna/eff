import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppMainComponent } from '../app.main.component';

@Component({
  selector: 'app-create-gas-station',
  templateUrl: './create-gas-station.component.html',
  styleUrls: ['./create-gas-station.component.scss']
})
export class CreateGasStationComponent implements OnInit {

  constructor(public app: AppComponent, public appMain: AppMainComponent) { }

  ngOnInit(): void {
  }

}
