import { ICertificate } from './../certificates-services/certificates.model';
import { CertificatesService } from './../certificates-services/certificates.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

@Component({
    moduleId: module.id,
    templateUrl: 'certificates-details.component.html',
    styleUrls: ['certificates-details.component.css']
})

export class CertificatesDetailsComponent {
    certificate: ICertificate;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _certificatesService: CertificatesService) {
    }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            this._certificatesService.getCertificate(+params['id'])
                .subscribe((certificate) => this.certificate = certificate);
        })
        
    }

    all(): void {
        this._router.navigate(['/certificates']);
    }

    // back(): void {
    //     let obj = this._certificatesService.getCertificate(+this._route.snapshot.params['id']);
    //     let id = obj.id - 1;
    //     this._router.navigate(['/certificates/' + id]);
    // }
    
    // next(): void {
    //     let obj = this._certificatesService.getCertificate(+this._route.snapshot.params['id']);
    //     let id = obj.id + 1;
    //     this._router.navigate(['/certificates/' + id]);
    // }
}


