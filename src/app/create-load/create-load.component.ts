import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CONSTANTS } from 'src/environments/globalVariables';
import { FirebaseService } from '../service/apiServices/firebase.service';
import { LoggedInUserData } from '../service/dataShareServices/userDetails';
import { TimeFormatService } from '../shared/utils/date_timeFunctions';
// import
import { AppComponent } from '../app.component';
import { AppMainComponent } from '../app.main.component';

import { OpenStreetMapProvider } from 'leaflet-geosearch';
// setup
const provider = new OpenStreetMapProvider();

// search
// const results = await provider.search({ query: input.value });
declare var L: any;
@Component({
  selector: 'app-create-load',
  templateUrl: './create-load.component.html',
  styleUrls: ['./create-load.component.scss']
})
export class CreateLoadComponent implements OnInit {
  createLoad_Form: any;
  mappedData: any = [];
  mappedDelvData: any = [];
  showDelveryLoc: boolean;
  showPickupLoc: boolean;
  isPickUpFrmList: boolean;
  isDeliveryFrmList: boolean;
  constructor(public app: AppComponent, public appMain: AppMainComponent,private fb: FormBuilder, private msgServcRef: MessageService, private api: FirebaseService,
    private router: Router, private timeServc: TimeFormatService, private loginData: LoggedInUserData) { }

  drivers = [];
  loadSize = [];
  equipmentType = [];
  requiredDocuments = [];



  ngOnInit(): void {
    debugger;
    this.drivers = [
      { name: 'Jack' },
      { name: 'Kal' },
      { name: 'Jim' },
    ];
    this.loadSize = [
      { name: 'Full Truck' },
      { name: 'Partial Truck' },
    ];
    this.equipmentType = [
      { name: 'Flatbed' },
      { name: 'Tires' },
      { name: 'Chassis' },
    ];
    this.requiredDocuments = [
      { name: 'BOL Document' },
      { name: 'POP Document' },
      { name: 'Lumber Receipt' },
      { name: 'Scale Tickets' },
      { name: 'Upload Invoice' },
      // {name : 'Rate Confirmation'},
      { name: 'Other' },
    ];
    this.createLoad_Form = this.createLoadForm();
  }

  createLoadForm() {
    return this.fb.group({
      "create_date": [this.timeServc.formatDate(new Date())],
      "created_by": ["",],
      "customerName": [""],
      "driverName": [''],
      "delivery_addr": [""],
      "delivery_latitude": [""],
      "delivery_longitude": [""],
      "equipment_type": [""],
      "loadId": [""],
      "load_delivery_date": ["", [Validators.required]],
      // "load_delivery_loc" : ["",[Validators.required]],
      "load_delivery_loc": ["", [Validators.required]],
      "load_pickup_date": ["", [Validators.required]],
      // "load_pickup_loc" : ["",[Validators.required]],
      "load_pickup_loc": ["", [Validators.required]],
      "load_size": [""],
      "load_status": [""],
      "max_weight": [""],
      "pickup_addr": [""],
      "pickup_latitude": [""],
      "pickup_longitude": [""],
      "spcial_capabilities": [""],
      "sub_type": [""],
      "tarps": [""],
      "total_miles": [""],
      "trailer_length": [""],
      "update_date": [""],
      "updated_by": [""],
      "userid": [""],
    })
  }

  async onPickUpLocSearch($event) {
    this.isPickUpFrmList = false;
    const results = await provider.search({ query: $event.target.value });
    console.log("placesapi", results);
    if (results.length !== 0) {
      this.mappedData = results.map(each => {
        return each
      })
      if (this.mappedData.length > 0) {
        this.showPickupLoc = true;
      } else {
        this.showPickupLoc = false;
      }
    } else {
      this.mappedData = [];
      this.showPickupLoc = false;
    }
  }

  onSelectPickUpLoc(selectedObj) {
    this.createLoad_Form.get('load_pickup_loc').setValue(selectedObj.display_name);
    this.createLoad_Form.get('pickup_latitude').setValue(selectedObj.lat);
    this.createLoad_Form.get('pickup_longitude').setValue(selectedObj.lon);
    this.showPickupLoc = false;
    this.isPickUpFrmList = true;
  }

  async onDeliveryLocSearch($event) {
    this.isDeliveryFrmList = false;
    const results = await provider.search({ query: $event.target.value });
    console.log("placesapi -> 2", results);
    debugger;
    if (results.length !== 0) {
      this.mappedDelvData = results.map(each => {
        return each
      })
      if (this.mappedDelvData.length > 0) {
        this.showDelveryLoc = true;
      } else {
        this.showDelveryLoc = false;
      }
    } else {
      this.mappedDelvData = [];
      this.showDelveryLoc = false;
    }
  }

  onSelectDelveryLoc(selectedObj) {
    this.createLoad_Form.get('load_delivery_loc').setValue(selectedObj.display_name);
    this.createLoad_Form.get('delivery_latitude').setValue(selectedObj.lat);
    this.createLoad_Form.get('delivery_longitude').setValue(selectedObj.lon);
    this.showDelveryLoc = false;
    this.isDeliveryFrmList = true;
  }

  onSubmit_CreateForm(formValue) {
    if (formValue['load_pickup_date'] !== '') {
      formValue['load_delivery_date'] = this.timeServc.formatDate(new Date(formValue['load_delivery_date']));
    }
    if (formValue['load_pickup_date'] !== '') {
      formValue['load_pickup_date'] = this.timeServc.formatDate(new Date(formValue['load_pickup_date']));
    }
    formValue['driverName'] = formValue['driverName']['name'] ?? '';
    formValue['load_size'] = formValue['load_size']['name'] ?? '';
    formValue['equipment_type'] = formValue['equipment_type']['name'] ?? '';
    formValue['userid'] = this.loginData.getLoginDetails()['userid'];

    formValue['documents'] = [
      {
        name: "Bol Document",
        shortname: "bol document",
        docLocation: "pickup",
        information: " inforamtion"
      },
      {
        name: "proof of pickup document",
        shortname: "pop document",
        docLocation: "pickup"
      },
      {
        name: "Lumber Receipt",
        shortname: "LR document",
        docLocation: "delivery"
      },
      {
        name: "scale Tickets",
        shortname: "ST document",
        docLocation: "Delivery"
      },
      {
        name: 'upload inovice',
        shortname: "upload invoice",
        docLocation: "Delivery"
      }
    ]
    this.api.createLoad(formValue, formValue['userid']).then(response => {
      // formValue.id  = response.key;
      //  this.api.update_Load(formValue,formValue['userid']);
      this.msgServcRef.add({ severity: 'success', summary: 'Info', detail: 'Load Created successfully' });
      this.router.navigate(["/dashboard"]);
    });
  }



}
