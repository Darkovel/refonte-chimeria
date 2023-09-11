import { Component } from "@angular/core";
import { TitleType } from "../bandeaux/title.bandeau/title.bandeau.component";

@Component({
    selector: 'page-legacy',
    templateUrl: './page.legacy.component.html',
    styleUrls: ['./page.legacy.component.css']
}) export class PageLegacyComponent {
    image:{url:string, alt:string} = 
        {url:"/assets/img/photo-titles/Bandeau_Communiqués_ss_titre.png", alt:"Legacy"};

        type = TitleType.secondary;
}