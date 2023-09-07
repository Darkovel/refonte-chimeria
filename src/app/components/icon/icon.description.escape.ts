import {Component, Input} from "@angular/core";

@Component({
    selector: 'icon-description-escape',
    template: `
        <div class="icon-container">
            <div class="transparent-background">

            </div>
            <div class="icon-escape-container">
                <div class="image-container">
                    <img src={{image.src}} alt={{image.alt}} loading="lazy">
                </div>
                <div class="description-container">
                        <p class="centered"><ng-content></ng-content></p>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .icon-container {
            position:relative;
            height: 200px; 
            width: 200px; 
            margin:25px; 
            padding:15px
        }

        .transparent-background {
            position:absolute;
            top:0px;
            left: 0px;
            height: 100%; 
            width: 100%; 
            border: 1px solid var(--passheure-gray); 
            background-color: var(--passheure-gray); 
            opacity: .52; 
            border-radius:52px; 
            z-index: 1;
        }

        .icon-escape-container {
            position:relative;
            display:grid; 
            top:0px;
            left: 0px;
            height: 100%; 
            width: 100%; 
            z-index:2;
        }

        .image-container {
            grid-row:1 / 2; 
            display:flex; 
            align-content:center;
        }
        .image-container img {
            max-width:100%; 
            width:auto; 
            max-height: 100%; 
            height:auto; 
            margin:auto;
        }
        .description-container {
            position: relative; 
            margin:10px;
        }
        .centered {
            width:100%; 
            margin:0; 
            position: absolute; 
            top:50%; 
            left:50%; 
            -ms-transform:translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }
        .description-container p {
            font: normal normal normal 18px/22px var(--passheure-font-family-blackchancery);  
            color:white; 
            text-align: center;
        }
    `
    ]
}) export class IconDescriptionEscapeComponent {
    @Input() image: {src: string, alt: string};
}