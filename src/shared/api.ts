import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import {  config } from "./globals";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Subject } from "rxjs/Subject";

@Injectable()
export class Api{
    private _apiBase: string;
    constructor( private http: Http){
        this._apiBase = config.apiBaseUrl;
    }
    private _getRequestOptions(){
        return new RequestOptions({
            headers: new Headers({
                "Content-Type" : "application/json"
                , "Authorization": 'Bearer ' + localStorage.getItem("__at")
                //, "Accept-Charset": "UTF-8"
            })
        });
    }
    isTokenValid(): Observable<any>{
        var token = localStorage.getItem("__at")
        return this.http.get(this._apiBase + '/v1/account/isAuthenticated', this._getRequestOptions())
        .map((response: Response)=> {
            return response.json();
        });
    }
    authenticate (creadentials): Observable<any>{
        var cred = {
            userName: creadentials.userName,
            secret: creadentials.secret
        }
        return this.http.post(this._apiBase + '/v1/account/authenticate', cred, this._getRequestOptions())
        .map((response: Response)=> {
            //save the token here
            var resp = response.json();
            if(!resp.isError){
                localStorage.setItem("__at", resp.data.accessToken)
            }
            return resp.data;
        });
    }

    signoff (): void{
        localStorage.removeItem("__at");
        localStorage.removeItem("__ud");
    }

    createProfile (profile): Observable<any>{
        return this.http.post(this._apiBase + '/v1/account', profile, this._getRequestOptions())
        .map((response: Response)=> {
            var resp = response.json();
            return resp.data;
        });
    }

}
