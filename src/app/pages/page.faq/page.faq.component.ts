import { Component } from "@angular/core";
import { PositionInterBandeau } from "src/app/components/inter-bandeau/interbandeau.component";

@Component({
    selector: 'page-faq',
    templateUrl: './page.faq.component.html',
    styleUrls: ['./page.faq.component.css']
}) export class PageFAQComponent {
    image:{url:string, alt:string} = 
        {url:"/assets/img/photo-titles/Bandeau_Communiqués_ss_titre.png", alt:"Nos Aventures"};
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