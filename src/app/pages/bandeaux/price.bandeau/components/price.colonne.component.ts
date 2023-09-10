import { Component, Input, AfterViewInit } from "@angular/core";

@Component ({
    selector: 'price-colonne',
    template: `
        <div class="group">
            <div class="g-case g-img">
                <img src={{listIconGroup[price.nbTeam-2]}} loading="lazy" alt="Icon de groupe" height="50%" width="auto">
            </div>
            <div class="g-case g-h">
                <p>{{price.priceHC}} €</p>
            </div>
            <div class="g-case g-h">
                <p>{{price.priceHP}} €</p>
            </div>
        </div>
    `,
    styles: [`
        .group {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            width: 100%;
            text-align: center; 
            font: normal normal normal 20px/23px var(--passheure-font-family-perpetua); 
            letter-spacing: 0px; 
            color: var(--passheure-white);
        }

        .g-case {
            display: flex;
            width: 175px; 
            aspect-ratio: 1/1;
            align-items:center; 
            justify-content: center; 
        }

        .g-img { 
            border-bottom: 2px dashed var(--passheure-blue); 
        }
        .g-h { 
            border-left: 2px dashed var(--passheure-blue);
            border-bottom: 2px dashed var(--passheure-blue); 
        }

        @media(max-width:1250px) {
            .g-case {
                width: 150px; 
            }
        }

        @media(max-width:1000px) {
            .g-case {
                width: 100px; 
            }
        }

        @media(max-width:700px) {
            .group {
                display: grid;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr 1fr 1fr;
            }

            .g-case {
                width: 175px; 
            }
        }
        @media(max-width:500px) {
            .g-case  {
                width: 100px; 
            }        
        }
    `]
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