import { BioComponent } from './bio/bio.component';
import { HomeRoutes } from './home.routes';
import { SharedModule } from './../shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HomeComponent,
        BioComponent
    ],
    imports: [ 
        SharedModule, 
        HomeRoutes
    ],
})
export class HomeModule { }