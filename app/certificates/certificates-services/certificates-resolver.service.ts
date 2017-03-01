import { CertificatesService } from './certificates.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable() 
export class CertificatesListResolver implements Resolve<any> {
    constructor(private certificatesService: CertificatesService) {}
    
    resolve() {
        return this.certificatesService.getCertificates().map(certificates => certificates);
    }
    
}