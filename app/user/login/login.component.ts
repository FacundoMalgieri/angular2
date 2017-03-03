import { SharedModule } from './../../shared/shared.module';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    constructor(private auth: AuthService,
                private _router: Router) {}

    login(formValues: any) {
        this.auth.loginUser(formValues.userName, formValues.password);
        this._router.navigate(['/home']);
    }

    cancel() {
         this._router.navigate(['/home']);
    }
}