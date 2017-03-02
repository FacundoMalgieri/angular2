import { CertificatesThumbnailComponent } from './certificates-thumbnail/certificates-thumbnail.component';
import { CertificatesDetailsComponent } from './certificates-details/certificates-details.component';
import { CertificatesListComponent } from './certificates-list/certificates-list.component';
import { CertificatesListResolver } from './certificates-services/certificates-resolver.service';
import { CertificatesCreateModule } from './certificates-create/certificates-create.component';
import { CertificatesService } from './certificates-services/certificates.service';
import { CertificatesRoutes } from './certificates.routes';
import { CertificatesGuard } from './certificates-services/certificates-guard.service';
import { AppComponent } from './../app.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        CertificatesListComponent,
        CertificatesThumbnailComponent,
        CertificatesDetailsComponent,
        CertificatesCreateModule
    ],
    imports: [
        SharedModule,
        CertificatesRoutes
    ],
    providers: [
        CertificatesListResolver,
        CertificatesService,
        CertificatesGuard
    ]
})

export class CertificatesModule {
}