import { Component } from '@angular/core';

@Component({
    selector: 'events-app',
    template: `
        <header-comp></header-comp>
        <router-outlet></router-outlet>
        <footer-comp></footer-comp>
    `
})
export class EventsAppComponent {
}