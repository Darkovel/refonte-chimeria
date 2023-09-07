import { Component, Input } from "@angular/core";

export enum TitleType {
    main="main", secondary="secondary"
}

@Component({
    selector: 'title-bandeau',
    templateUrl: './title.bandeau.component.html',
    styleUrls: ['./title.bandeau.component.css'],
}) export class TitleBandeauComponent {
@Input() image:{url:string, alt: string};
    @Input() type: TitleType;
    main = TitleType.main;
}