import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()


export class DriversManagementService {
    constructor(private http: HttpClient) { }

    getDrivers() {
        return this.http.get<any>('assets/demo/data/drivers-data.json')
        .toPromise()
        .then(res => res.data)
        .then(data => { return data; });
    }

    getDriversHeaders() {
        return this.http.get<any>('assets/demo/data/drivers-data.json')
        .toPromise()
        .then(res => res.headers)
        .then(data => { return data; });
    }

}
