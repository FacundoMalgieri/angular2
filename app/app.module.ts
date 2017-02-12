import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './nav/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ 
        AppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        HeaderComponent,
        FooterComponent,
        EventDetailsComponent
     ],
     imports: [ 
        BrowserModule,
        AppRoutingModule
    ],
    providers : [ EventService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}