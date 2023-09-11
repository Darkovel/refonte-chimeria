import { Component } from "@angular/core";

@Component({
    selector: 'lettre-mission',
    template: `
        <section class="lettre-mission-container">
            <div class="lettre-header">
                <div class="logo-container"><img src="/assets/img/lettre_mission/header_lettre_mission_logo.png" alt="Logo de la Fondation Charon" width="100%" height="auto"></div>
                <div class="title-container">
                    <h3>Ordre de mission</h3>
                </div>
            </div>
            <div class="letter-body">
                <ng-content></ng-content>
            </div>
            <div class="letter-footer">
                <div class="rejoin">
                    <p>Rejoignez-nous !</p>
                </div>
                <div class="signature">
                    <p>Pr Charon et Associés</p>
                </div>
            </div>
        </section>
    `,
    styles: [`
        .lettre-mission-container {
            display: block;
            font-size: auto;
        }

        .lettre-header {
            display: grid;
            grid-template-columns: 1fr 3fr;
            margin:50px;
        }

        .logo-container {
            
        }

        .title-container {
            display: flex;
            background-image: url(/assets/img/lettre_mission/header_lettre_mission_trait.png);
            background-size: contain;
            background-repeat: no-repeat;
            font: normal normal normal 3.5vw/2.5vw var(--passheure-font-family-daypbl);
        }

        .title-container h3 {
            margin: auto;
            margin-right: 0px;
        }

        .letter-body {
            display: block;
            font: normal normal normal 3.5vw/4vw var(--passheure-font-family-gothic);
            text-indent: 5%;
            width:90%;
            margin: auto;
        }

        .letter-footer {
            display: grid;
            grid-template-columns: 1fr 2fr;
            margin-left:10%;
            padding-bottom: 25px;
        }

        .rejoin {
            background-image: url("/assets/img/lettre_mission/footer_lettre_mission_trait.png");
            background-repeat: no-repeat;
            background-size: contain;
            background-position-y: bottom 30%;
            font: normal normal normal 5vw/6.5vw var(--passheure-font-family-gothic);
            text-align: left;
        }

        .rejoin p {
            margin-top: 0px;
        }
    
        .signature {
            font: normal normal normal 5vw/6vw var(--passheure-font-family-mistrully);
            text-align: right;
        }

        .signature p {
            margin-bottom: 0px;
        }

        @media(max-width:700px) {
            .lettre-header {
                margin:20px;
            }
        }

        @media(max-width:500px) {
            .lettre-header {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1f;
            }

            .logo-container {
                height:80px;
                width:80px;
            }

            .title-container {
                height:80px;
                background-position-x: 25%;
            }
        }
    `]
}) export class LettreMissionComponent {

}