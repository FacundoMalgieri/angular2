import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
        ReactiveFormsModule,
        FooterComponent,
        NavbarComponent,
        CommonModule,
        FormsModule,
        FilterPipe
    ]
})
export class SharedModule { }