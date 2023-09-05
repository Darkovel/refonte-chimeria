import { Component } from "@angular/core";
import { PositionInterBandeau } from "src/app/components/inter-bandeau/interbandeau.component";

@Component({
    selector:'reservation-page',
    templateUrl: './page.reservation.component.html',
    styleUrls: ['./page.reservation.component.css']

}) export class ReservationPage {
    imageReservation:{url:string, alt:string} = 
        {url:"/assets/img/photo-titles/Bandeau_Réservation_ss_titre.png", alt:"accueil"};
    links:{url:string, name:string}[] = [
        {url:'/accueil', name:'Accueil'},
        {url:'/nos-aventures', name:'Nos aventures'},
        {url:'/jeux-nomades', name:'Jeux nomades'},
        {url:'/communiques', name:'Communiqués'},
        {url:'/faq', name:'FAQ'}
    ]

    left = PositionInterBandeau.left;
    center = PositionInterBandeau.center;
    right = PositionInterBandeau.right;
} 