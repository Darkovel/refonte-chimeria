import { Component } from "@angular/core";

@Component({
    selector: "logo-header",
    template: `
        <a href="./" class="nav-icon-logo"
            aria-label="visit homepage"
            aria-current="page">
            <img src="assets/img/logos/Logo-couleur-alone.png" alt="Le PassHeure" height="45px" width="auto">
            <div class="text-logo-container">
                <p class="title-logo">Le Pass'Heure</p>
                <p class="descprition-logo">Live escape game</p>
            </div>
        </a>`,
    styles : [
        ".nav-icon-logo {display: flex; width: 150px;}",
        ".nav-icon-logo img {margin-left: auto}",
        ".text-logo-container {position:relative}",
        ".title-logo {color: white; font-size:12px}",
        ".descprition-logo {position:absolute; top:20px; right:0; color:white; font-size:5px}"
    ]
}) export class LogoHeaderComponent {}