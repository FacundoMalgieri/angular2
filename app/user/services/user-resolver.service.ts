import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable() 
export class UserResolver implements Resolve<any> {
  
    constructor(private auth: AuthService) {}
    
    resolve() {
        return this.auth.allUsers();
    }
}

