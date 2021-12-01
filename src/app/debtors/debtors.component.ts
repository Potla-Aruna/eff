import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { AppMainComponent } from "../app.main.component";
import { DebtorDataService } from "../service/DebtorDataService";

@Component({
    selector: "app-debtors",
    templateUrl: "./debtors.component.html",
    styleUrls: ["./debtors.component.scss"],
})
export class DebtorsComponent implements OnInit {
    debtorsTableData: any[];
    pageResults: any;
    headersData: any[];
    searchPlaceholders: any[];
    constructor(
        public app: AppComponent,
        public appMain: AppMainComponent,
        private debtorsData: DebtorDataService
    ) {}

    ngOnInit(): void {
        this.debtorsData
        .getDebtors()
        .then((data) => (this.debtorsTableData = data));

    this.debtorsData
        .getDebtorsHeaders()
        .then((data) => (this.headersData = data));

    this.debtorsData
        .getDebtorsHeaders()
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
