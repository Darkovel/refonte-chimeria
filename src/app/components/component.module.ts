import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BtnPassHeureReservationComponent } from "./btn/btn.passheure.reservation.component";
import { IconDescriptionComponent } from "./icon/icon.description";
import { BtnPassHeureComponent } from "./btn/btn.passheure.component";
import { BtnPassHeureHeaderComponent } from "./btn/btn.passheure.header";
import { IconDescriptionEscapeComponent } from "./icon/icon.description.escape";
import { LogoHeaderComponent } from "./logo/logo.header";
import { BtnCommuniqueComponent } from "./btn/btn.passheure.communique.component";
import { CommuniqueResumeComponent } from "./communique/communique.resume.component";
import { InterBandeauComponent } from "./inter-bandeau/interbandeau.component";

const index = [
       BtnPassHeureReservationComponent,
       BtnPassHeureComponent,
       BtnPassHeureHeaderComponent,
       IconDescriptionComponent,
       IconDescriptionEscapeComponent,
       LogoHeaderComponent,
       CommuniqueResumeComponent,
       BtnCommuniqueComponent,
       InterBandeauComponent,
]

@NgModule({
    imports: [RouterModule],
    declarations: index,
    exports: index
}) export class ComponentModule{}