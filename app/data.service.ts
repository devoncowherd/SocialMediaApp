import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService{
    BASE_URL = 'http://localhost:3000/users';

    constructor(private http: HttpClient) { }

    getAllData(email:any): Observable<any>{
        return this.http.get<any>(`${this.BASE_URL}/${email}`)
    }
}