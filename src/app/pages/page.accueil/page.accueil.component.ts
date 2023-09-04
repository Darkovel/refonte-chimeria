import {Component} from "@angular/core";
import { PositionInterBandeau } from "src/app/components/inter-bandeau/interbandeau.component";

@Component({
    selector: "page-accueil",
    templateUrl: "./page.accueil.component.html",
    styleUrls: ["./page.accueil.component.css"]
}) export class PageAccueilComponent {
    imageAccueil:{url:string, alt:string} = 
        {url:"/assets/img/photo-titles/Bandeau_Accueil_ss_titre.png", alt:"accueil"};
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