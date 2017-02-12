import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './nav/navbar.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NavbarComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [ CommonModule ],
    exports: [
        FormsModule,
        CommonModule,
        NavbarComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule { }