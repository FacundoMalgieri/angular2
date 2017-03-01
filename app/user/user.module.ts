import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './../shared/shared.module';
import { UserRoutes } from './user.routes';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    imports: [ 
        SharedModule,
        UserRoutes 
    ],
    exports: [
        
    ]
})
export class UserModule { }