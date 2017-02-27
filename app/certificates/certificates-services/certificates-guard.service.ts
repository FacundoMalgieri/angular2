import { CertificatesService } from './certificates.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class CertificatesGuard implements CanActivate {
    constructor(private _router: Router, private certificatesService: CertificatesService){
    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        let exists = !!this.certificatesService.getCertificate(id);
        if(isNaN(id) || id < 1 || !exists) {
            this._router.navigate(['/certificates/1']);
            return false;
        };
        return true;
    }
}
