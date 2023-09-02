import { Component } from "@angular/core";

@Component({
    selector: 'definition-escape',
    templateUrl: './definition.escape.component.html',
    styleUrls: ['./definition.escape.component.css']
}) export class DefinitionEscapeComponent {
    groupe_image:{src: string, alt: string} = {src: "/assets/img/descriptions/Groupe.svg", alt: "Une équipe"};
    mission_image:{src: string, alt: string} = {src: "/assets/img/descriptions/Mission.svg", alt: "Une mission"};
    timer_image:{src: string, alt: string} = {src: "/assets/img/descriptions/Timer.svg", alt: "Une heure"};
}