import {Component, Input} from "@angular/core";

@Component( {
    selector: 'icon-description',
    template: `
        <div class="container">
            <img src={{image.src}} alt={{image.alt}}>
        </div>
        `,
    styles: [".container {display: flex; height: 150px; width: 150px; border-radius: 25px; background-color: var(--passheure-orange); margin:20px}"]
}) export class IconDescriptionComponent {
    @Input() image: {src: string, alt: string};
}