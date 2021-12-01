import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class UsersManagementService {
    constructor(private http: HttpClient) { }

    getUsersManagement() {
        return this.http.get<any>('assets/demo/data/users-data.json')
        .toPromise()
        .then(res => res.data)
        .then(data => { return data; });
    }

    getUsersManagementHeaders() {
        return this.http.get<any>('assets/demo/data/users-data.json')
        .toPromise()
        .then(res => res.headers)
        .then(data => { return data; });
    }

}
