import {Component, Input} from "@angular/core";

@Component({
    selector: 'icon-description-escape',
    template: `
        <div class="container">
            <div class="image-container">
                <img src={{image.src}} alt={{image.alt}}>
            </div>
            <div class="description-container">
                    <p class="centered"><ng-content></ng-content></p>
            </div>
        </div>
    `,
    styles: [
        ".container {display: grid;  height: 150px; width: 150px; grid-template-columns: 150px; grid-template-rows: repeat (3, 1fr); background-color: gray; opacity: 25%; border-radius:25px; }",
        ".image-container {grid-row:1 / 2; margin:10px}",
        ".description-container{position: relative; margin:10px}",
        ".centered {width:100%; margin:0; position: absolute; top:50%; left:50%; -ms-transform:translate(-50%, -50%);transform: translate(-50%, -50%);}",
        "p {font-family: 'passheure-tile-font'; font-size:14px; color:white; text-align: center;}"
    ]
}) export class IconDescriptionEscapeComponent {
    @Input() image: {src: string, alt: string};
}