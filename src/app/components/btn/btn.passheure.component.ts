import {Component, Input} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'btn-passheure',
    template: `
        <button class='btn-container' (click)="onClick()">
            <div class='centered'>
                <p><ng-content></ng-content></p>
            </div>
    </button>
    `,
    styles: [
        ".btn-container {display:flex; position: relative; border:round; width:250px ; height: 40px ;background-color: var(--passheure-orange); border-radius: 25px}",
        ".centered {font-family: 'passheure-tile-font'; margin:0; position: absolute; top:50%; left:50%; -ms-transform:translate(-50%, -50%);transform: translate(-50%, -50%);}",
        "p {color:white; font-family: 'passheure-title-font'; font-size: 14px}"],
}) export class BtnPassHeureComponent {
    @Input() link;

    constructor(private router:Router) {}

    onClick() {
        this.router.navigateByUrl(this.link);
    }
}