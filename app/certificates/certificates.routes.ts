import { CertificatesGuard } from './certificates-services/certificates-guard.service';
import { CertificatesDetailsComponent } from './certificates-details/certificates-details.component';
import { CertificatesListComponent } from './certificates-list/certificates-list.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'certificates', component: CertificatesListComponent },
    { path: 'certificates/:id', canActivate: [ CertificatesGuard ], 
      component: CertificatesDetailsComponent },
]

export const CertificatesRoutes = RouterModule.forChild(routes);


