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
            border-color: var(--passheure-gray);
            border-radius: 63px
        }
        .centered {
            margin:0; 
            position: absolute; 
            width: 100%;
            top: 50%; 
            left: 50%; 
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }
        .btn-header-container p {
            font: normal normal normal 20px/25px var(--passheure-font-family-blackchancery);
            letter-spacing: 0px;
            color: var(--passheure-white);
        }
        
        @media(max-width:700px) {
            .btn-header-container {
                width: 150px; 
                height: 35px;
            }
            .btn-header-container p {
                font: normal normal normal 18px/23px var(--passheure-font-family-blackchancery);
            }
        }
        
        @media(max-width:500px) {
            .btn-header-container {
                width: 100px; 
                height: 35px;
            }
            .btn-header-container p {
                font: normal normal normal 16px/20px var(--passheure-font-family-blackchancery);
            }
        }`
        ],
}) export class BtnPassHeureHeaderComponent {
    @Input() link;

    constructor(private router:Router) {}

    onClick() {
        this.router.navigateByUrl(this.link);
    }
}