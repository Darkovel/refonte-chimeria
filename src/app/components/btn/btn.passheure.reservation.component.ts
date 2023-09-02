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
        ".btn-reservation-container {display:flex; position: relative; border:round; width:400px ; height: 50px ;background-color: var(--passheure-light-yellow); border-radius: 25px; margin: auto}",
        ".centered {font-family: 'passheure-tile-font'; margin:0; position: absolute; top:50%; left:50%; -ms-transform:translate(-50%, -50%);transform: translate(-50%, -50%);}",
        ".btn-reservation-container p {font-family: 'passheure-title-font'; font-size: 20px}"],
}) export class BtnPassHeureReservationComponent {
    @Input() link;

    constructor(private router:Router) {}

    onClick() {
        this.router.navigateByUrl(this.link);
    }
}