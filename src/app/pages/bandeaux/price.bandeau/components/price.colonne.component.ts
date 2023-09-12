import { Component, Input, AfterViewInit } from "@angular/core";

@Component ({
    selector: 'price-colonne',
    template: `
        <div class="group">
            <div class="g-case g-img">
                <img src={{iconGroup.src}} loading="lazy" alt={{iconGroup.alt}} height="50%" width="auto">
            </div>
            <div class="g-case g-h hproduct" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" typeof="product:Product">
                <span class="" style="display: none;">
                    <span class="category">Escape Game</span>
                    <span class="category">Heure Creuse</span>
                    <span class="category">{{price.nbTeam}} joueurs</span>
                    <span class="fn">Session escape game en <abbr title="Heure Creuse">HC</abbr> </span>
                    <span class="description">Une session d'escape game du Pass'heure en heure creuse pour {{price.nbTeam}} joueurs</span>
                </span>
                <p><span class="price">{{price.priceHC}}</span> <abbr title="Euros" lang="fr" class="currency">€</abbr></p>
            </div>
            <div class="g-case g-h hproduct" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" typeof="product:Product">
                <span class="" style="display: none;">
                    <span class="category">Escape Game</span>
                    <span class="category">Heure Pleine</span>
                    <span class="category">{{price.nbTeam}} joueurs</span>
                    <span class="fn">Session escape game en <abbr title="Heure Pleine">HP</abbr> </span>
                    <span class="description">Une session d'escape game du Pass'heure en heure pleine pour {{price.nbTeam}} joueurs</span>
                </span>
                <p><span class="price">{{price.priceHP}}</span> <abbr title="Euros" lang="fr" class="currency">€</abbr></p>
            </div>
        </div>
    `,
    styles: [`
        abbr {
            text-decoration: none;
        }
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
        this.iconGroup.alt = "Groupe de " + this.price.nbTeam.toString() + " joueurs";
    }
}