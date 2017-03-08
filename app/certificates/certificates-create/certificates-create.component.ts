import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CertificatesService } from './../certificates-services/certificates.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    moduleId: module.id,
    templateUrl: 'certificates-create.component.html',
    styleUrls: ['certificates-create.component.css']
})

export class CertificatesCreateModule {
    constructor(private certificateService: CertificatesService,
        private _router: Router) { }

    saveCertificate(formValues: any) {
        this.certificateService.saveCertificate(formValues)
            .subscribe(c => this._router.navigate(['/certificates'+c.id]));
    }

    cancel() {
        this._router.navigate(['/home']);
    }

}