import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: 'Facu',
            firstName: 'Facundo',
            lastName: 'Malgieri',
            password: 'facu'
        }
    }

    isLogged() {
        return !!this.currentUser;
    }

    updateUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}