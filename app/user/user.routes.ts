import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { UserModule } from './user.module';

export const routes: Routes = [
    { path: 'user', component: UserModule,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'login', component: LoginComponent}
        ]
    }
]

export const UserRoutes = RouterModule.forChild(routes);
