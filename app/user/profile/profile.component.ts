import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})

export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(private auth: AuthService,
        private _router: Router) { }

    ngOnInit() {
        this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    saveProfile(formValues: any) {
        if (this.profileForm.valid) {
            this.auth.updateUser(formValues.firstName, formValues.lastName);
            this._router.navigate(['/home']);
        }
    }

    cancel() {
        this._router.navigate(['/home']);
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }
}