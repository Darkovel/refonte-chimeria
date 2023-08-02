import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationPage } from './pages/reservation.page/reservation.page';
import { LayoutsModule } from './pages/layout/layout.module';
import { TestComponent } from './pages/test/test.component';
import { ComponentModule } from './components/component.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    ComponentModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
