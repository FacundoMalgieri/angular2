import { eventRoutes } from './event.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forChild(eventRoutes),
    ],
    exports: [ RouterModule ]
})
export class EventRoutingModule { }