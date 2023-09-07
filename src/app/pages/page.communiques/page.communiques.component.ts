import { Component } from "@angular/core";
import { PositionInterBandeau } from "src/app/components/inter-bandeau/interbandeau.component";
import { TitleType } from "../bandeaux/title.bandeau/title.bandeau.component";

@Component({
    selector: 'page-communiques',
    templateUrl: './page.communiques.component.html',
    styleUrls: ['./page.communiques.component.css']
}) export class PageCommuniquesComponent {
    image:{url:string, alt:string} = 
        {url:"/assets/img/photo-titles/Bandeau_Communiqués_ss_titre.png", alt:"Nos Aventures"};

    left = PositionInterBandeau.left;
    center = PositionInterBandeau.center;
    right = PositionInterBandeau.right;

    type = TitleType.secondary;
}