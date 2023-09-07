import { Component } from "@angular/core";
import { PositionInterBandeau } from "src/app/components/inter-bandeau/interbandeau.component";
import { TitleType } from "../bandeaux/title.bandeau/title.bandeau.component";

@Component({
    selector:'reservation-page',
    templateUrl: './page.reservation.component.html',
    styleUrls: ['./page.reservation.component.css']

}) export class ReservationPage {
    imageReservation:{url:string, alt:string} = 
        {url:"/assets/img/photo-titles/Bandeau_Réservation_ss_titre.png", alt:"accueil"};

    left = PositionInterBandeau.left;
    center = PositionInterBandeau.center;
    right = PositionInterBandeau.right;

    type = TitleType.secondary;
} 