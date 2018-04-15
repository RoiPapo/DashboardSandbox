import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class RequestService {
    // Resolve HTTP using the constructor
    constructor(private http: Http) { }
    // private instance variable to hold base url
    private jsonUrl = 'http://localhost:3000/api';

    getData(): Observable<string> {
        return this.http.get(this.jsonUrl)
            .map((res: Response) => res.json()) // parse the responce to javascript object
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }


}