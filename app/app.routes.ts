import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

export const AppRoutes = RouterModule.forRoot(routes);
