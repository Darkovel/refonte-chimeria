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
        ".btn-header-container {display:flex; position: relative; border:round; width:150px ; height: 30px ;background-color: var(--passheure-orange); border-radius: 25px}",
        ".centered {margin:0; position: absolute; top:50%; left:50%; -ms-transform:translate(-50%, -50%);transform: translate(-50%, -50%);}",
        "p {color:white; font-family: 'passheure-title-font'; font-size: 12px}"],
}) export class BtnPassHeureHeaderComponent {
    @Input() link;

    constructor(private router:Router) {}

    onClick() {
        this.router.navigateByUrl(this.link);
    }
}