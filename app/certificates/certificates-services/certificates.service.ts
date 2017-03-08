import { Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ICertificate } from './certificates.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX';

@Injectable()
export class CertificatesService {
    private url: string = '/api/certificates.json';

    constructor(private http: Http) { }

    getCertificates(): Observable<ICertificate[]> {
        return this.http.get(this.url)
            .map((response: Response) => <ICertificate[]>response.json())
            .catch(this.handleError);
    }

    getCertificate(id: number): Observable<ICertificate> {
        return this.getCertificates()
            .map((certificates: ICertificate[]) =>
                certificates.find(c => c.id === id))
    }

    saveCertificate(certificate: any): Observable<ICertificate> {
        let headers = new Headers({ 'Content-Type': 'aplication/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.url, JSON.stringify(certificate), options)
            .map((res: Response) => { return res.json() })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}

