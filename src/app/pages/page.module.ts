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
import { FooterComponent } from "./layout/footer/footer.component";
import { PageAvenuresComponent } from "./page.aventures/page.aventures.component";
import { PageCommuniquesComponent } from "./page.communiques/page.communiques.component";
import { PageFAQComponent } from "./page.faq/page.faq.component";
import { PageJeuxNomadeComponent } from "./page.jeux.nomade/page.jeux.nomade.component";
import { OngletQuestionComponent } from "./page.faq/components/onglet.question.component";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LayoutComponent,
        PageAccueilComponent,
        ReservationPage,
        PageAvenuresComponent,
        PageCommuniquesComponent,
        PageFAQComponent,
        OngletQuestionComponent,
        PageJeuxNomadeComponent,
        TestComponent,
    ],
    imports:[
        BandeauModule,
        CommonModule,
        ComponentModule,
        RouterModule,
        ],
    
}) export class PageModule{}