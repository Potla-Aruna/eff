import { Component, OnInit } from "@angular/core";
import { AppComponent } from '../app.component';
import { AppMainComponent } from '../app.main.component';

@Component({
    selector: "app-create-driver",
    templateUrl: "./create-driver.component.html",
    styleUrls: ["./create-driver.component.scss"],
})
export class CreateDriverComponent implements OnInit {
    constructor(public app: AppComponent, public appMain: AppMainComponent) {}

    ngOnInit(): void {
    }

    uploadLicense(e) {
        const licenseButton = document.getElementById("hidden-file-upload-button");
        console.log(licenseButton);
        licenseButton.click();
        e.stopPropagation();
    }

    iconUploadLicense(e){
        const licenseButton = document.getElementById("hidden-file-upload-button");
        console.log(licenseButton);
        licenseButton.click();
        e.stopPropagation();
    }

    fileDetails() {
        const file = document.querySelector("#hidden-file-upload-button");
        const reader = new FileReader();
        const fileDetails = (<HTMLInputElement>file).files[0];
        console.log(fileDetails);

        const licenseButton = document.getElementById("upload-license-button");
        (<HTMLInputElement>licenseButton).placeholder=fileDetails.name;
    }
}
