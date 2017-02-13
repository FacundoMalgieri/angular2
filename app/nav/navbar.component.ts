import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {
    constructor(private _router: Router) { }
    home(): void {
        this._router.navigate(['/home']);
    }

    events(): void {
        this._router.navigate(['/events']);
    }

    goTo(location: string): void {
        window.location.hash = location;
    }

    bio(): void {
        this._router.navigate(['/home/bio']).then(() => {
            this.goTo('#intro');
        });; 
    }
}