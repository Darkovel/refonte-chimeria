import {Component, Input} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'btn-passheure-header',
    template: `
        <button class='btn-header-container' (click)="onClick()">
            <div class='centered'>
                <p><ng-content></ng-content></p>
            </div>
    </button>
    `,
    styles: [
        `.btn-header-container {
            display: flex; 
            position: relative; 
            border: round; 
            width: 200px; 
            height: 35px;
            background-color: var(--passheure-orange); 
            border-radius: 63px
        }`,
        `.centered {
            margin:0; 
            position: absolute; 
            width: 100%;
            top: 50%; 
            left: 50%; 
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }`,
        `.btn-header-container p {
            font: normal normal normal 20px/25px var(--passheure-font-family-blackchancery);
            letter-spacing: 0px;
            color: var(--passheure-white);
        }`],
}) export class BtnPassHeureHeaderComponent {
    @Input() link;

    constructor(private router:Router) {}

    onClick() {
        this.router.navigateByUrl(this.link);
    }
}