import { Component } from "@angular/core";

@Component ({
    selector: 'communique-bandeau',
    templateUrl: './communique.bandeau.component.html',
    styleUrls: ['./communique.bandeau.component.css'],
}) export class CommuniqueBandeauComponent {
    resumes:{id:string, imgSrc:string, title:string, description:string}[] = [
        {id:'1', imgSrc:'', title:'Article 1', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'1', imgSrc:'', title:'Article 2', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
        {id:'1', imgSrc:'', title:'Article 3', description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi '},
    ];
}