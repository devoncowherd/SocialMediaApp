import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Credentials } from "./model/credentials.model";
import { AuthCertificate } from "src/app/model/auth-certificate.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    private authCert: AuthCertificate = new AuthCertificate();

    private AUTH_URL = 'http://localhost:8080/users';

    constructor(private http: HttpClient) { }


    register(data:any): Observable<any>{
        return this.http.post<any>(`${this.AUTH_URL}register`,data)
    }

    login(data:any): Observable<any>{
        return this.http.post<any>(`${this.AUTH_URL}login`, data)
    }
}