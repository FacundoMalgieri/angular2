import { FilterPipe } from './events-list/filter.pipe';
import { EventRoutes } from './event.routes';
import { SharedModule } from './../shared.module';
import { AppComponent } from './../app.component';
import { EventGuard } from './event-services/event-guard.service';
import { EventService } from './event-services/event.service';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        FilterPipe
    ],
    imports: [
        SharedModule,
        EventRoutes
    ],
    providers: [
        EventService,
        EventGuard
    ]
})

export class EventsModule {
}