import { Component, Input, AfterViewInit } from "@angular/core";

@Component ({
    selector: 'price-colonne',
    template: `
        <div class="group">
            <div class="g-img">
                <img src={{listIconGroup[price.nbTeam-2]}} alt="Icon de groupe" height="80px" width="auto">
            </div>
            <div class="g-hc">
                <p>{{price.priceHC}} €</p>
            </div>
            <div class="g-hp">
                <p>{{price.priceHP}} €</p>
            </div>
        </div>
    `,
    styles: [
        ".group { text-align: center; font: normal normal normal 20px/23px var(--passheure-font-family-perpetua); letter-spacing: 0px; color: var(--passheure-white);}",
        ".g-img { display: flex; height: 175px; width: 175px; align-items:center; justify-content: center; }",
        ".g-hc { display: flex; height: 175px; width: 175px; align-items: center; justify-content: center; border: 2px dashed var(--passheure-blue); border-right: none}",
        ".g-hp { display: flex; height: 175px; width: 175px; align-items: center; justify-content: center; border: 2px dashed var(--passheure-blue); border-right: none}",
    ]
}) export class PriceColonneComponent implements AfterViewInit {
    @Input() price:{nbTeam:number, priceHP:number, priceHC:number};

    listIconGroup: string[] = [
        "/assets/img/prices/Groupe-2j.svg",
        "/assets/img/prices/Groupe-3j.svg",
        "/assets/img/prices/Groupe-4j.svg",
        "/assets/img/prices/Groupe-5j.svg",
        "/assets/img/prices/Groupe-6j.svg"
    ];
    iconGroup: {src:string, alt:string} = {src:"",alt:""};

    ngAfterViewInit(): void {
        this.iconGroup.src = "/assets/img/prices/Groupe-" + this.price.nbTeam.toString() + "j.svg";
        this.iconGroup.src = "Groupe de " + this.price.nbTeam.toString() + " joueurs";
    }
}