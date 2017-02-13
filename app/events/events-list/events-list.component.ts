import { EventService } from './../event-services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'events-list.component.html',
    styleUrls: ['events-list.component.css']  
})

export class EventsListComponent { 
    events: any[];
    listFilter: string;

    constructor(private eventService : EventService) { }

    ngOnInit() {
		this.events = this.eventService.getEvents();
    }
}