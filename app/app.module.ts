import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { EventsModule } from './events/events.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [ 
        AppComponent
     ],
     imports: [
        HomeModule,
        SharedModule,
        EventsModule, 
        BrowserModule,
        AppRoutes
    ],
    exports: [
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}