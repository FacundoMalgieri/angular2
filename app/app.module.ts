import { CertificatesModule } from './certificates/certificates.module';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
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
        CertificatesModule
    ],
    exports: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }