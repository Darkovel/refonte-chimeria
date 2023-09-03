import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component ({
    selector: 'btn-communique',
    template: `
        <button class='btn-communique-container' (click)="onClick()">
            <div class='centered'>
                <p>LIRE L'ARTICLE</p>
            </div>
    </button>
    `,
    styles: [
        ".btn-communique-container {display:flex; position: relative; border:round; width:175px ; height: 40px ; border: 1px solid #014D60; border-radius: 20px}",
        ".centered {margin:0; position: absolute; top:50%; left:50%; -ms-transform:translate(-50%, -50%);transform: translate(-50%, -50%);}",
        ".btn-communique-container p {font: normal normal normal 13px/21px DM Sans; letter-spacing:0px;}"],
}) export class BtnCommuniqueComponent {
    @Input() link;

    constructor(private router:Router) {}

    onClick() {
        this.router.navigateByUrl(this.link);
    }

}