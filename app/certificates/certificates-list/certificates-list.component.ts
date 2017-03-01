import { CertificatesService } from './../certificates-services/certificates.service';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ICertificate } from './../certificates-services/certificates.model';

@Component({
    moduleId: module.id,
    templateUrl: 'certificates-list.component.html',
    styleUrls: ['certificates-list.component.css']  
})

export class CertificatesListComponent { 
    certificates: ICertificate[];
    listFilter: string;

    constructor(private certificatesService : CertificatesService,
                private route: ActivatedRoute) { }

    ngOnInit() {
		this.certificates = this.route.snapshot.data['certificates']
    }
}