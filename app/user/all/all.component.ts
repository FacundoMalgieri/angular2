import { IUser } from './../services/user.model';
import { Component , OnInit } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { AuthService } from './../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'all.component.html',
    styleUrls: ['all.component.css']
})

export class AllComponent implements OnInit {
    all: IUser[];

    constructor(private auth: AuthService,  private route: ActivatedRoute) {}
    
    ngOnInit() {
        this.all = this.route.snapshot.data['all'];
    }
}