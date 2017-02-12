import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class EventGuard implements CanActivate {
    constructor(private _router: Router, private eventService: EventService){
    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        let exists = !!this.eventService.getEvent(id);
        if(isNaN(id) || id < 1 || !exists) {
            alert('Invalid ID');
            this._router.navigate(['/events']);
            return false;
        };
        return true;
    }
}
