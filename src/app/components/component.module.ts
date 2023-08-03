import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BtnPassHeureReservationComponent } from "./btn.passheure.reservation.component";
import { IconDescriptionComponent } from "./icon.description";
import { BtnPassHeureComponent } from "./btn.passheure.component";
import { BtnPassHeureHeaderComponent } from "./btn.passheure.header";
import { IconDescriptionEscapeComponent } from "./icon.description.escape";
import { LogoHeaderComponent } from "./logo.header";

const index = [
       BtnPassHeureReservationComponent,
       BtnPassHeureComponent,
       BtnPassHeureHeaderComponent,
       IconDescriptionComponent,
       IconDescriptionEscapeComponent,
       LogoHeaderComponent,
]

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: index,
    exports: index
}) export class ComponentModule{}