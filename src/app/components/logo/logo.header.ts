import { Component } from "@angular/core";

@Component({
    selector: "logo-header",
    template: `
        <a href="./" class="nav-icon-logo"
            aria-label="visit homepage"
            aria-current="page">
            <picture>
                <source srcset="assets/img/logos/Logo-couleur-alone_200x200.png" media="(min-width:500px)" >
                <img src="assets/img/logos/Logo-couleur-alone_100x100.png" alt="Le PassHeure" loading="lazy">
            </picture>
            
            <div class="text-logo-container">
                <p class="title-logo">Le Pass'Heure</p>
                <p class="descprition-logo">Live escape game</p>
            </div>
        </a>`,
    styles : [
        `
        a {
            text-align:center;
            text-decoration:none;
        }
        .nav-icon-logo {
            display: flex; 
            height: 95px;
            width: 275px;
        }
        .nav-icon-logo picture {
            height: 100%;
            width: auto;
            margin-left: auto;
        }
        .nav-icon-logo img {
            height: 100%;
            width: auto;
            margin-left: auto;
        }
        .text-logo-container {
            display: block; 
            position:relative;
        }
        .title-logo {
            font: normal normal normal 28px/36px var(--passheure-font-family-blackchancery);
            color: var(--passheure-white);
            text-decoration: none;
        }
        .descprition-logo {
            position:absolute; 
            top:50px; 
            right:0; 
            font: normal normal normal 12px/16px var(--passheure-font-family-blackchancery);
            color: var(--passheure-white);
        }
        
        @media(max-width:900px) {
            .title-logo {
                font: normal normal normal 26px/34px var(--passheure-font-family-blackchancery);
            }
            .descprition-logo {
                font: normal normal normal 12px/16px var(--passheure-font-family-blackchancery);
                top:40px; 
            }
        }
        
        @media(max-width:700px) {
            .title-logo {
                font: normal normal normal 24px/30px var(--passheure-font-family-blackchancery);
            }
        }
        
        @media(max-width:500px) {
            .nav-icon-logo {
                height:45px;
                width: 150px;
            }

            .title-logo {
                font: normal normal normal 16px/23px var(--passheure-font-family-blackchancery);
            }
            .descprition-logo {
                font: normal normal normal 9px/12px var(--passheure-font-family-blackchancery);
                top:0px; 
            }
        }`
    ]
}) export class LogoHeaderComponent {}