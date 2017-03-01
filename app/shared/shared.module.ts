import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './nav/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        FilterPipe,
    ],
    imports: [ 
        CommonModule,
        RouterModule
    ],
    exports: [
        FormsModule,
        CommonModule,
        NavbarComponent,
        FooterComponent,
        FilterPipe
    ]
})
export class SharedModule { }