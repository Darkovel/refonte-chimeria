import { Component } from "@angular/core";

@Component({
    selector: 'test-app',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
}) export class TestComponent { 
    imageAccueil:{url:string, alt:string} = 
        {url:"/assets/img/photo-titles/Bandeau_Accueil_ss_titre.png", alt:"accueil"};
}