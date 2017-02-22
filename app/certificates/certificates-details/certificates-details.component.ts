import { CertificatesService } from './../certificates-services/certificates.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

@Component({
    moduleId: module.id,
    templateUrl: 'certificates-details.component.html',
    styleUrls: [ 'certificates-details.component.css' ]
}) 

export class CertificatesDetailsComponent {
    certificate: any;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute, 
                private _router: Router,
                private _certificatesService: CertificatesService) { 
    }
    
    ngOnInit(): void {
        this.certificate = this._certificatesService.getCertificate(+this._route.snapshot.params['id']);
    }
    
    onBack(): void {
        this._router.navigate(['/certificates']);
    }
}
   
    
  