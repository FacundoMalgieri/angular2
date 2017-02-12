import { EventService } from './../event-services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'events-list.component.html'  
})

export class EventsListComponent { 
    events: any[];
    constructor(private eventService : EventService) { }

    ngOnInit() {
		this.events = this.eventService.getEvents();
    }
}