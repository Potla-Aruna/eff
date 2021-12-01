import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class DebtorDataService {

    constructor(private http: HttpClient) {}

    getDebtors() {
        return this.http.get<any>('assets/demo/data/debtor-data.json')
        .toPromise()
        .then(res => res.data)
        .then(data => { return data; });
    }

    getDebtorsHeaders() {
        return this.http.get<any>('assets/demo/data/debtor-data.json')
        .toPromise()
        .then(res => res.headers)
        .then(data => { return data; });
    }

}
