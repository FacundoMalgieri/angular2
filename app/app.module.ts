import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './nav/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EventService } from './events/shared/event.service';
import { appRoutes } from './routes';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ 
        BrowserModule ,
        RouterModule.forRoot(appRoutes)    
    ],
    declarations: [ 
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        HeaderComponent,
        FooterComponent,
        EventDetailsComponent
     ],
    providers : [ EventService ],
    bootstrap: [ EventsAppComponent ]
})
export class AppModule {
}