import { CertificatesService } from './../certificates-services/certificates.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'certificates-list.component.html',
    styleUrls: ['certificates-list.component.css']  
})

export class CertificatesListComponent { 
    certificates: any[];
    listFilter: string;

    constructor(private certificatesService : CertificatesService) { }

    ngOnInit() {
		this.certificates = this.certificatesService.getCertificates();
    }
}