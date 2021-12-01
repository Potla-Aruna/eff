import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { AppMainComponent } from "../app.main.component";
import { Router } from "@angular/router";

@Component({
    selector: "app-custom-menu",
    templateUrl: "./custom-menu.component.html",
    styleUrls: ["./custom-menu.component.scss"],
})
export class CustomMenuComponent implements OnInit {
    menuItems: any[];
    currentlyActive: boolean = false;
    constructor(
        public app: AppComponent,
        public appMain: AppMainComponent,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.menuItems = [
            {
                icon: "fa-home",
                text: "Home",
            },

            {
                icon: "fa-user",
                text: "Debtors",
            },
            {
                icon: "fa-users",
                text: "Users",
            },
            {
                icon: "fa-user-plus",
                text: "Drivers",
            },
            {
                icon: "fa-gas-pump",
                text: "Gas Stations",
            },
        ];
    }

    setCurrentActive(index) {
        console.log(index);
        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((el) => {
            el.classList.remove("active");
        });
        menuItems[index].classList.add("active");
        switch (index) {
            case 0:
                this.router.navigate(["/dashboard"]);
                break;
            case 1:
                this.router.navigate(["/dashboard/debtors"]);
                break;
            case 2:
                this.router.navigate(["/dashboard/users-management"]);
                break;
            case 3:
                this.router.navigate(["/dashboard/drivers-management"]);
                break;

            case 4:
                this.router.navigate(["/dashboard/gas-stations"]);
                break;

            default:
                this.router.navigate(["/dashboard/work-in-progress"]);
        }
    }
}
