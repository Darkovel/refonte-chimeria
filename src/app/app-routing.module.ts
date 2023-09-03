import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page.accueil/page.accueil.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: "accueil", component: PageAccueilComponent, pathMatch: "full" },
  { path: "reservation", component: PageAccueilComponent},
  { path: "nos-aventures", component: PageAccueilComponent},
  { path: "jeux-nomades", component: PageAccueilComponent},
  { path: "communiques", component: PageAccueilComponent},
  { path: "faq", component: PageAccueilComponent},
  { path: "legacy", component: PageAccueilComponent},
  { path: "partenaire", component: PageAccueilComponent},
  { path: "test", component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
