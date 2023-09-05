import { Component } from "@angular/core";
import { PositionInterBandeau } from "src/app/components/inter-bandeau/interbandeau.component";

@Component({
    selector: 'page-jeux-nomade',
    templateUrl: './page.jeux.nomade.component.html',
    styleUrls: ['./page.jeux.nomade.component.css']
}) export class PageJeuxNomadeComponent {
    image:{url:string, alt:string} = 
        {url:"/assets/img/photo-titles/Bandeau_NosAventures_ss_titre.png", alt:"Nos Aventures"};
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