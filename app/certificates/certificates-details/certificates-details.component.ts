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
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _certificatesService: CertificatesService) {
    }

     ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getCertificate(id);
            }
        );
    }
    
    getCertificate(id:number) {
        this._certificatesService.getCertificate(id).subscribe(
                c => this.certificate = c,
                error => this.errorMessage = <any>error);
    }

    all(): void {
        this._router.navigate(['/certificates']);
    }

    back(): void {
        let currentId = +this._route.snapshot.params['id'];
        let previousId = currentId - 1;
        console.log(previousId + ' obj: ' + currentId)
        this._router.navigate(['/certificates/' + previousId]);
    }
    
    next(): void {
        let currentId = +this._route.snapshot.params['id'];
        let nextId = currentId + 1;
        this._router.navigate(['/certificates/' + nextId]);
    }
}


