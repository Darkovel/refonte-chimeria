import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page.accueil/page.accueil.component';
import { TestComponent } from './pages/test/test.component';
import { ReservationPage } from './pages/page.reservation/page.reservation.component';
import { PageJeuxNomadeComponent } from './pages/page.jeux.nomade/page.jeux.nomade.component';
import { PageAvenuresComponent } from './pages/page.aventures/page.aventures.component';
import { PageCommuniquesComponent } from './pages/page.communiques/page.communiques.component';
import { PageFAQComponent } from './pages/page.faq/page.faq.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'accueil', pathMatch: 'full'},
    { path: "accueil", component: PageAccueilComponent, pathMatch: "full" },
    { path: "reservation", component: ReservationPage},
    { path: "nos-aventures", component: PageAvenuresComponent},
    { path: "jeux-nomades", component: PageJeuxNomadeComponent},
    { path: "communiques", component: PageCommuniquesComponent},
    { path: "faq", component: PageFAQComponent},
    { path: "legacy", component: PageAccueilComponent},
    { path: "partenaire", component: PageAccueilComponent},
    { path: "test", component: TestComponent}
  ]
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
