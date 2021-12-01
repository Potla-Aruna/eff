import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { AppMainComponent } from "../app.main.component";
import { GasStationsService } from "../service/GasStationsService";

@Component({
    selector: "app-gas-stations",
    templateUrl: "./gas-stations.component.html",
    styleUrls: ["./gas-stations.component.scss"],
})
export class GasStationsComponent implements OnInit {
    gasStationsTableData: any[];
    pageResults: any;
    headersData: any[];
    searchPlaceholders: any[];

    constructor(
        public app: AppComponent,
        public appMain: AppMainComponent,
        private gasStationsData: GasStationsService
    ) {}

    ngOnInit(): void {
        this.gasStationsData
            .getGasStations()
            .then((data) => (this.gasStationsTableData = data));

        this.gasStationsData
            .getGasStationsHeaders()
            .then((data) => (this.headersData = data));

        this.gasStationsData
            .getGasStationsHeaders()
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
