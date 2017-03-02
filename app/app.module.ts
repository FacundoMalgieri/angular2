import { AuthService } from './user/services/auth.service';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { CertificatesModule } from './certificates/certificates.module';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ 
        AppComponent
     ],
     imports: [
        HomeModule,
        SharedModule,
        BrowserModule,
        AppRoutes,
        CertificatesModule,
        UserModule
    ],
    exports: [],
    providers: [ AuthService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }