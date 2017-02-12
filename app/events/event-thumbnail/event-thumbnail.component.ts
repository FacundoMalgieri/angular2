import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styleUrls: [ 'event-thumbnail.component.css' ] 
})

export class EventThumbnailComponent { 
    @Input() event: any;

    logFoo() {
        console.log('foo');
    }

    getTime():any {
        const early  = this.event && this.event.time == '8:00 am';
        const normal = this.event && this.event.time == '9:00 am';
        const late   = this.event && this.event.time == '10:00 am';
        if(early) return { green: early , bold: early }; 
        else if(normal) return { yellow: normal, bold: normal } ;
        else return { red: late, bold: late };
    }

   
/*  @Output() eventClick = new EventEmitter();
    handleClickMe() {
        this.eventClick.emit(this.event.name);
    }
*/
}