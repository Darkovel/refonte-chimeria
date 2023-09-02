import { Component } from "@angular/core";

@Component({
    selector: "bandeau-description",
    templateUrl: "./description.bandeau.component.html",
    styleUrls: ["./description.bandeau.component.css"]
}) export class DescriptionBandeauComponent {
    univers_image: {src:string, alt: string} = {src: "/assets/img/logos/logo-univers.svg", alt:"Un univers"};
    histoire_image: {src:string, alt: string} = {src: "/assets/img/logos/logo-histoire.svg", alt:"Une histoire"};
    mystere_image: {src:string, alt: string} = {src: "/assets/img/logos/logo-mystère.svg", alt:"Un mystère"};
    
}