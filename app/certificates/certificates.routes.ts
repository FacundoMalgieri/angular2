import { CertificatesDetailsComponent } from './certificates-details/certificates-details.component';
import { CertificatesListComponent } from './certificates-list/certificates-list.component';
import { CertificatesListResolver } from './certificates-services/certificates-resolver.service';
import { Routes, RouterModule } from '@angular/router';
import { CertificatesGuard } from './certificates-services/certificates-guard.service';

export const routes: Routes = [
    { path: 'certificates', component: CertificatesListComponent, resolve: { certificates: CertificatesListResolver} },
    { path: 'certificates/:id', canActivate: [ CertificatesGuard ], 
      component: CertificatesDetailsComponent },
]

export const CertificatesRoutes = RouterModule.forChild(routes);


