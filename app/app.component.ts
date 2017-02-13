import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
        <footer-comp></footer-comp>
    `
})
export class AppComponent { }