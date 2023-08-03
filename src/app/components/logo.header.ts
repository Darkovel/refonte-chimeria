import { Component } from "@angular/core";

@Component({
    selector: "logo-header",
    template: `
        <a href="./" class="nav-icon"
            aria-label="visit homepage"
            aria-current="page">
            <img src="assets/img/logos/Logo-couleur-alone.png" alt="Le PassHeure" height="45px" width="auto">
            <div class="text-container">
                <p class="title">Le Pass'Heure</p>
                <p class="descprition">Live escape game</p>
            </div>
        </a>`,
    styles : [
        ".nav-icon {display: flex; width: 150px;}",
        ".nav-icon img {margin-left: auto}",
        ".text-container {position:relative}",
        ".title {color: white; font-size:12px}",
        ".descprition {position:absolute; top:20px; right:0; color:white; font-size:5px}"
    ]
}) export class LogoHeaderComponent {}