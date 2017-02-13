import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: HomeComponent,
        children: [
            { path: 'bio', component: BioComponent }
        ]
    }
]

export const HomeRoutes = RouterModule.forChild(routes);


