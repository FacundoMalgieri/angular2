import { AuthService } from './../../user/services/auth.service';
import { Router } from '@angular/router';
import { AppRoutes } from './../../app.routes';
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {
    private classes: string[] = [];

    constructor(private _router: Router,
                private auth: AuthService) { }

    home(): void {
        this._router.navigate(['/home']);
    }

    events(): void {
        this._router.navigate(['/events']);
    }

    profile(): void {
        this._router.navigate(['/user/profile']);
    }

    certificates(): void {
        this._router.navigate(['/certificates']);
    }

    goTo(location: string): void {
        window.location.hash = location;
    }

    bio(): void {
        this._router.navigate(['/home/bio']).then(() => {
            this.goTo('#intro');
        });
    }

    contact(): void {
        this._router.navigate(['/home/contact']).then(() => {
            this.goTo('#contact');
        });
    }
}
