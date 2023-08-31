import { AfterViewInit, Component, Input } from "@angular/core";

@Component({
    selector: 'title-bandeau',
    templateUrl: './title.bandeau.component.html',
    styleUrls: ['./title.bandeau.component.css'],
}) export class TitleBandeauComponent {
@Input() image:{url:string, alt: string};
}