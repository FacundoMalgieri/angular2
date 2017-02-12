import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { EventsModule } from './events/events.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './nav/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [ 
        AppComponent
     ],
     imports: [
        SharedModule,
        EventsModule, 
        BrowserModule,
        AppRoutingModule
    ],
    exports: [
        NavbarComponent    
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}