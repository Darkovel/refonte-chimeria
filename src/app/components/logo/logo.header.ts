import { Component } from "@angular/core";

@Component({
    selector: "logo-header",
    template: `
        <a href="./" class="nav-icon-logo"
            aria-label="visit homepage"
            aria-current="page">
            <img src="assets/img/logos/Logo-couleur-alone.png" alt="Le PassHeure" height="100%" width="auto">
            <div class="text-logo-container">
                <p class="title-logo">Le Pass'Heure</p>
                <p class="descprition-logo">Live escape game</p>
            </div>
        </a>`,
    styles : [
        `.nav-icon-logo {
            display: flex; 
            height: 95px;
            width: 275px;
            }`,
        `.nav-icon-logo img {
            margin-left: auto
            }`,
        `.text-logo-container {
            display: block; 
            position:relative
            }`,
        `.title-logo {
            font: normal normal normal 28px/36px var(--passheure-font-family-blackchancery);
            letter-spacing: 0px;
            color: var(--passheure-white);
            text-decoration: none;
            }`,
        `.descprition-logo {
            position:absolute; 
            top:50px; 
            right:0; 
            font: normal normal normal 12px/16px var(--passheure-font-family-blackchancery);
            letter-spacing: 0px;
            color: var(--passheure-white);
            }`
    ]
}) export class LogoHeaderComponent {}