import {Component} from "@angular/core";
import { PositionInterBandeau } from "src/app/components/inter-bandeau/interbandeau.component";
import { TitleType } from "../bandeaux/title.bandeau/title.bandeau.component";

@Component({
    selector: "page-accueil",
    templateUrl: "./page.accueil.component.html",
    styleUrls: ["./page.accueil.component.css"]
}) export class PageAccueilComponent {
    imageAccueil:{url:string, alt:string} = 
        {url:"/assets/img/photo-titles/Bandeau_Accueil_ss_titre.png", alt:"accueil"};
    
    left = PositionInterBandeau.left;
    center = PositionInterBandeau.center;
    right = PositionInterBandeau.right;

    type = TitleType.main;s
}