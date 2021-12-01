import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class GasStationsService {

    constructor(private http: HttpClient) {}

    getGasStations() {
        return this.http.get<any>('assets/demo/data/gas-stations.json')
        .toPromise()
        .then(res => res.data)
        .then(data => { return data; });
    }

    getGasStationsHeaders() {
        return this.http.get<any>('assets/demo/data/gas-stations.json')
        .toPromise()
        .then(res => res.headers)
        .then(data => { return data; });
    }

}
