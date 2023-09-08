import {Component, Input} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'btn-passheure-reservation',
    template: `
        <button class='btn-reservation-container' (click)="onClick()">
            <div class='centered'>
                <p><ng-content></ng-content></p>
            </div>
    </button>
    `,
    styles: [
        `.btn-reservation-container {
            display:flex; 
            position: relative;
             border:round; 
             width:465px; 
             height: 65px;
             background-color: 
             var(--passheure-light-yellow); 
             border-radius: 63px; 
             border-color: var(--passheure-gray);
             margin: auto;
        }
        .centered {
            margin:0; 
            position: absolute; 
            width:100%;
            top:50%; 
            left:50%; 
            -ms-transform:translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }
        .btn-reservation-container p {
            font: normal normal normal 34px/42px var(--passheure-font-family-blackchancery);
            letter-spacing: 0px;
            color: var(--passheure-blue);
        }
        
        @media(max-width:500px) {
            .btn-reservation-container {
                width:200px; 
                height: 40px;
            }

            .btn-reservation-container p {
                font: normal normal normal 20px/26px var(--passheure-font-family-blackchancery);
            }
        }`
            ],
}) export class BtnPassHeureReservationComponent {
    constructor(private router:Router) {}

    onClick() {
        this.router.navigateByUrl("/reservation");
    }
}