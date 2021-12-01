import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { AppMainComponent } from "../app.main.component";
import { DriversManagementService } from "../service/DriversManagementService";

@Component({
    selector: "app-drivers-management",
    templateUrl: "./drivers-management.component.html",
    styleUrls: ["./drivers-management.component.scss"],
})
export class DriversManagementComponent implements OnInit {
    usersData: any[];
    pageResults: any;
    headersData: any[];
    searchPlaceholders: any[];
    constructor(
        public app: AppComponent,
        public appMain: AppMainComponent,
        private driversManagement: DriversManagementService
    ) {}

    ngOnInit(): void {
        this.driversManagement
            .getDrivers()
            .then((data) => (this.usersData = data));

        this.driversManagement
            .getDriversHeaders()
            .then((data) => (this.headersData = data));

        this.driversManagement
            .getDriversHeaders()
            .then((data) => (this.searchPlaceholders = data));



        this.pageResults = [
            {
                value: 10,
            },
            {
                value: 20,
            },
            {
                value: 30,
            },
        ];
    }
}
