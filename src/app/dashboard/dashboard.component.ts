import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { AppMainComponent } from "../app.main.component";
import { Product } from "../Interfaces/product";
import { CustomProductService } from "../service/CustomProductService";
@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
    products: Product[];
    selectedCustomer: any;
    headersData: any[];
    placeholdersData: any[];
    pageResults: any;
    headerWidths: any[];
    constructor(
        private customProductService: CustomProductService,
        public app: AppComponent,
        public appMain: AppMainComponent
    ) {}

    ngOnInit(): void {
        this.customProductService
            .getProductsSmall()
            .then((data) => (this.products = data));

        this.customProductService
            .getHeaders()
            .then((data) => (this.headersData = data));

        this.customProductService
            .getPlaceholders()
            .then((data) => (this.placeholdersData = data));

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
