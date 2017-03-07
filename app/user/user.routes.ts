import { UserResolver } from './services/user-resolver.service';
import { AllComponent } from './all/all.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { UserModule } from './user.module';

export const routes: Routes = [
    { path: 'user', component: UserModule,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'login', component: LoginComponent},
            { path: 'all', component: AllComponent, resolve: { all: UserResolver } }
        ]
    }
]

export const UserRoutes = RouterModule.forChild(routes);
