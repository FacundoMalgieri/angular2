import { CertificatesRoutes } from './certificates.routes';
import { SharedModule } from './../shared.module';
import { AppComponent } from './../app.component';
import { CertificatesGuard } from './certificates-services/certificates-guard.service';
import { CertificatesService } from './certificates-services/certificates.service';
import { CertificatesListComponent } from './certificates-list/certificates-list.component';
import { CertificatesDetailsComponent } from './certificates-details/certificates-details.component';
import { CertificatesThumbnailComponent } from './certificates-thumbnail/certificates-thumbnail.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        CertificatesListComponent,
        CertificatesThumbnailComponent,
        CertificatesDetailsComponent,
    ],
    imports: [
        SharedModule,
        CertificatesRoutes
    ],
    providers: [
        CertificatesService,
        CertificatesGuard
    ]
})

export class CertificatesModule {
}