import { Component, Input, AfterViewInit, OnInit  } from "@angular/core";

export enum PositionInterBandeau {
    left, center, right
}

@Component({
    selector: 'inter-bandeau',
    template: `
    <div class="inter-bandeau-container" 
        [style.translate]="translate"
        [style.left]="left">
        <img [src]="imgUrl">
    </div>
    `,
    styles: [`
        .inter-bandeau-container {
            position: absolute;
            z-index:1;
        }
    `]
}) export class InterBandeauComponent implements OnInit  {
    @Input() imgUrl:string;
    @Input() position:PositionInterBandeau;

    translate:string;
    left:string;

    ngOnInit(): void {
        switch(this.position) {
            case PositionInterBandeau.left:
                this.translate = '-30% -30%';
                this.left = '0%';
                break;
            case PositionInterBandeau.center:
                this.translate = '-50% -30%';
                this.left = '50%';
                break;
            case PositionInterBandeau.right:
                this.translate = '-60% -60%';
                this.left = '100%';
                break;
        }
    }
}