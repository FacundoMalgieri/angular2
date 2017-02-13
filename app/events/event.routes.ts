import { EventGuard } from './event-services/event-guard.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsListComponent } from './events-list/events-list.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', canActivate: [ EventGuard ], 
      component: EventDetailsComponent },
]

export const EventRoutes = RouterModule.forChild(routes);


