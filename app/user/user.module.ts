import { UserResolver } from './services/user-resolver.service';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './../shared/shared.module';
import { AllComponent } from './all/all.component';
import { UserRoutes } from './user.routes';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent,
        AllComponent
    ],
    imports: [ 
        SharedModule,
        UserRoutes 
    ],
    providers: [ UserResolver ],
    exports: []
})

export class UserModule { }