import {Component, Input} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'btn-passheur',
    template: `
        <button class='container' (click)="onClick()">
            <div class='centered'>
                <p><ng-content></ng-content></p>
            </div>
    </button>
    `,
    styles: [
        ".container {display:flex; position: relative; border:round; width:450px ; height: 50px ;background-color: var(--passheure-yellow); border-radius: 25px}",
        ".centered {font-family: 'passheure-tile-font'; margin:0; position: absolute; top:50%; left:50%; -ms-transform:translate(-50%, -50%);transform: translate(-50%, -50%);}"],
}) export class BtnComponent {
    @Input() link;

    constructor(private router:Router) {}

    onClick() {
        this.router.navigateByUrl(this.link);
    }
}