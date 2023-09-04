import {Component, Input} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'btn-passheure',
    template: `
        <button class='btn-container-passheure' (click)="onClick()">
            <div class='centered'>
                <p><ng-content></ng-content></p>
            </div>
    </button>
    `,
    styles: [
        `.btn-container-passheure {
            display:flex; 
            position: relative; 
            border:round; 
            width:415px ; 
            height: 70px ;
            background-color: var(--passheure-orange); 
            border-radius: 63px}`,
        `.centered {
            margin:0; 
            position: absolute; 
            width:100%;
            top:50%; 
            left:50%; 
            -ms-transform:translate(-50%, -50%);
            transform: translate(-50%, -50%);}`,
        `.btn-container-passheure p {
            font: normal normal normal 25px/32px var(--passheure-font-family-blackchancery);
            letter-spacing: 0px;
            color: var(--passheure-white);
            }`],
}) export class BtnPassHeureComponent {
    @Input() link;

    constructor(private router:Router) {}

    onClick() {
        this.router.navigateByUrl(this.link);
    }
}