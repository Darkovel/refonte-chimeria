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
import { CalendarComponent } from "./calendar/calendar.component";
import { LoadingComponent } from "./loading/loading.component";
import { BrowserModule } from "@angular/platform-browser";

/* Material */
import { DialogReservation } from "./calendar/component/dialog-reservation";

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
       CalendarComponent,
       DialogReservation,
       LoadingComponent,
]

@NgModule({
    imports: [RouterModule, 
        BrowserModule],
    declarations: index,
    exports: index,
}) export class ComponentModule{}