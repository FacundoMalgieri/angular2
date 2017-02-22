import { FilterPipe } from './filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './nav/navbar.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        FilterPipe
    ],
    imports: [ CommonModule ],
    exports: [
        FormsModule,
        CommonModule,
        NavbarComponent,
        FooterComponent,
        FilterPipe
    ]
})
export class SharedModule { }