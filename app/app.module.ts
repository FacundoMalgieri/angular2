import { CertificatesModule } from './certificates/certificates.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './user/services/auth.service';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { HttpModule } from '@angular/http'
import { AppRoutes } from './app.routes';
import { NgModule } from '@angular/core';

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
        UserModule,
        HttpModule
    ],
    exports: [],
    providers: [ AuthService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }