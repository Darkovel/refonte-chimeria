import { Component } from "@angular/core";
import { PositionInterBandeau } from "src/app/components/inter-bandeau/interbandeau.component";
import { TitleType } from "../bandeaux/title.bandeau/title.bandeau.component";

@Component({
    selector: 'page-jeux-nomade',
    templateUrl: './page.jeux.nomade.component.html',
    styleUrls: ['./page.jeux.nomade.component.css']
}) export class PageJeuxNomadeComponent {
    image:{url:string, alt:string} = 
        {url:"/assets/img/photo-titles/Bandeau_NosAventures_ss_titre.png", alt:"Nos Aventures"};

    left = PositionInterBandeau.left;
    center = PositionInterBandeau.center;
    right = PositionInterBandeau.right;

    type = TitleType.secondary;
}