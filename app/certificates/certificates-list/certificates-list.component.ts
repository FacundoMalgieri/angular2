import { ICertificate } from './../certificates-services/certificates.model';
import { Component, OnInit } from '@angular/core'
import { SharedModule } from './../../shared/shared.module';
import { CertificatesService } from './../certificates-services/certificates.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'certificates-list.component.html',
    styleUrls: ['certificates-list.component.css']  
})

export class CertificatesListComponent implements OnInit{ 
    certificates: ICertificate[];
    listFilter: string;

    constructor(private certificatesService : CertificatesService, 
    private route: ActivatedRoute) { }

    ngOnInit() {
        this.certificates = this.route.snapshot.data['certificates'];
    }
}