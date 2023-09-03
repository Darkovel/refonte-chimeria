import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageAccueilComponent } from "./page.accueil/page.accueil.component";
import { BandeauModule } from "./bandeaux/bandeau.module";
import { TestComponent } from "./test/test.component";
import { ReservationPage } from "./page.reservation/page.reservation.component";
import { ComponentModule } from "../components/component.module";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./layout/header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "./layout/footer/footer.component";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LayoutComponent,
        PageAccueilComponent,
        ReservationPage,
        TestComponent,
    ],
    imports:[
        BandeauModule,
        CommonModule,
        ComponentModule,
        RouterModule,
        ],
    
}) export class PageModule{}