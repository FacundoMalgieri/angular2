import { EventService } from './../event-services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

@Component({
    moduleId: module.id,
    templateUrl: 'event-details.component.html',
    styleUrls: [ 'event-details.component.css' ]
}) 

export class EventDetailsComponent {
    event: any;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute, 
                private _router: Router,
                private _eventService: EventService) { 
    }
    
    ngOnInit(): void {
        this.event = this._eventService.getEvent(+this._route.snapshot.params['id']);
    }
    onBack(): void {
        this._router.navigate(['/events']);
    }
}
   
    
  