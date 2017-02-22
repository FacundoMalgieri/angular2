import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: HomeComponent,
        children: [
            { path: 'bio', component: BioComponent },
            { path: 'contact', component: ContactComponent }
        ]
    }
]

export const HomeRoutes = RouterModule.forChild(routes);


