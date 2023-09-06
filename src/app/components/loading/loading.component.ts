import { Component } from "@angular/core";

@Component({
    selector: 'loading',
    template: `
        <div class="loading-container">
            <br>Chargement du calendrier en cours...
        </div>
    `,
    styles: [`
        .loading-container {
            display: flex;
            font: normal normal normal 20px/28px var(--passheure-font-family-blackchancery);
            text-align: center;
            align-items: center;
            justify-content: center;
            min-height: 480px;
            color: var(--passheure-white);
        }
    `]
}) export class LoadingComponent {

}