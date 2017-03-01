import { SharedModule } from './../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HomeComponent,
        ContactComponent,
        BioComponent
    ],
    imports: [ 
        SharedModule, 
        HomeRoutes
    ],
})
export class HomeModule { }