import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }