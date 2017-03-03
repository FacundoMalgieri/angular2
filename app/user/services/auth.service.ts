import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { IUser } from './user.model';


@Injectable()
export class AuthService {
    currentUser: IUser;
    private url: string = './../../api/users.json';

    constructor(private http: Http) { }

    allUsers():Observable<IUser[]> {
        return this.http.get(this.url)
            .map((response: Response) => {
                return <IUser[]>response.json();
            })
            .catch(this.handleError);
    }

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

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}