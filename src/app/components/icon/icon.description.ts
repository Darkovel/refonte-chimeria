import {Component, Input} from "@angular/core";

@Component( {
    selector: 'icon-description',
    template: `
        <div class="icon-description-container">
            <img src={{image.src}} alt={{image.alt}} loading="lazy">
        </div>
        `,
    styles: [`
        .icon-description-container {
            display: flex; 
            height: 150px; 
            width: 150px; 
            border-radius: 25px; 
            background-color: var(--passheure-orange); 
            margin:20px;
        }
        .icon-description-container img {
            margin: 10px;
        }

        @media(max-width:500px) {
            .icon-description-container {
                height: 100px; 
                width: 100px; 
                margin: 10px;
            }
        }
    `]
}) export class IconDescriptionComponent {
    @Input() image: {src: string, alt: string};
}