import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { AppMainComponent } from "../app.main.component";
import { UsersManagementService } from "../service/UsersManagementService";

@Component({
    selector: "app-users-management",
    templateUrl: "./users-management.component.html",
    styleUrls: ["./users-management.component.scss"],
})
export class UsersManagementComponent implements OnInit {
    usersData: any[];
    pageResults: any;
    headersData: any[];
    searchPlaceholders: any[];

    constructor(
        public app: AppComponent,
        public appMain: AppMainComponent,
        private usersManagementData: UsersManagementService
    ) {}

    ngOnInit(): void {
        this.usersManagementData
            .getUsersManagement()
            .then((data) => (this.usersData = data));

        this.usersManagementData
            .getUsersManagementHeaders()
            .then((data) => (this.headersData = data));

        this.usersManagementData
            .getUsersManagementHeaders()
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
