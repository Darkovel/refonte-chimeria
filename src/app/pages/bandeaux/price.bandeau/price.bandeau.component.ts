import { Component } from "@angular/core";

@Component({
    selector: 'price-bandeau',
    templateUrl: './price.bandeau.component.html',
    styleUrls: ['./price.bandeau.component.css']
}) export class PriceBandeauComponent {
    prices:{nbTeam:number, priceHP:number, priceHC:number}[] = [
        {nbTeam:2, priceHP:0, priceHC:1},
        {nbTeam:3, priceHP:2, priceHC:3},
        {nbTeam:4, priceHP:4, priceHC:5},
        {nbTeam:5, priceHP:6, priceHC:7},
        {nbTeam:6, priceHP:8, priceHC:9},
    ];

}