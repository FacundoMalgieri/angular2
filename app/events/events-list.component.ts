import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app/events/events-list',
    templateUrl: 'app/events/events-list.component.html'  
})

export class EventsListComponent { 
    events: any[];
    constructor(private eventService : EventService) { }

    ngOnInit() {
		this.events = this.eventService.getEvents();
    }
}